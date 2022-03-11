# Image Codemod

## Introduction

### Context

src/content/docs/apm/agents/c-sdk/get-started

The english version of the site contains subdirectories of images at each leaf of a docs directory. For example, `src/content/docs/apm/agents/c-sdk/get-started` may contain an `images/` subdirectories that, when translated, are duplicated into `src/i18n/content/{locale}/docs/apm/agents/c-sdk/get-started`. The site has duplicate images and image subdirectories inside content directories. The purpose of this codemod is to alias all images inside `.mdx` files to an absolute path that lives at `src/images`, where all english and translated content can be referenced to this one source of truth.

### MDX URL Images and img tags

Currently, there are a mix of MDX URL Images and image tags throughout all content folders. Unfortunately, MDX URL Images cannot reference an alias path since aliases are configured through webpack. Therefore, `[my image]('./images/myImage.png' 'my awesome image')` will not be able to use an alias. The purpose of this image codemod is to convert the MDX URL image into an `img` tag.

> Note: converting MDX Image URLs are only applied to images that contain a relative path.
>
> e.g. `./images/myImage.png`

Example:
```md
 ![my image]('./images/myImage.png' 'my awesome image')
```

Gets converted to

```md
  import myImage from 'images/myImage.png'

  <img
    src={myImage}
    alt="my image"
    title="my awesome image"
  />
```

### Special cases where MDX URL image has a parent component/tag

There are occurrences when an MDX URL image is wrapped by a parent. Specifically, if an MDX URL has a `heading` or `ImageSizing` as it's parent, we need to do two unique changes to the converted `img` tag.

Example 1 - `ImageSizing` parent

In this scenario, ImageSizing is expecting an MDX URL Image. After running the codemod, we do not have any need for `ImageSizing` anymore, so we transfer the attributes from `ImageSizing` to the new `img` tag.

```md
  <ImageSizing width="25px" height="25px" verticalAlignment="middle">![my image]('./images/myImage.png' 'my awesome image') </ImageSizing>
```

Gets converted to:

```md
  import myImage from 'images/myImage.png'

  <img
    src={myImage}
    alt="my image"
    title="my awesome image"
    style={{ width: "25px", height: "25px", verticalAlignment: "middle" }}
  />
```

Example 2 - `Heading` parent

In this scenario, `heading` inline text and/or components.

```md
 # ![my image]('./images/myImage.png' 'my awesome image')
```

Gets converted to:

```md
  import myImage from 'images/myImage.png'

  # <img src={myImage} alt="my image" title="my awesome image" />
```

### Dynamically adding imports to MDX Files

When adding imports to MDX files, we take into account that there is `yaml` at the top of mdx, and proceed to add the imports beneath it.
One factor to consider with adding imports to the top of mdx files, is that there are occasions where an import may already exist. The codemod handles that by reusing the import name that already exists with the converted `img` tag.


Another factor that is considered, is existing `img` tags that contain a relative path in the `src` attribute. We check if the image is already imported. If it is not imported, we add it underneath the `yaml`. Otherwise, we reuse the existing import name.

### Moving images from subdirectory into `src/images`

Moving the images is handled by searching for any file ending `[.png, .jpg, .jpeg, .svg, .gif]`. Once all the paths are copied, we send them to get moved to `src/images`. Once all files have been moved, we go back to those file paths and remove the subdirectories.

> Note: Since there is currently not a naming convention set for filenames, the codemod handles changing filenames that are non-url friendly.

### Usage

There is a yarn command that can be ran to work the entire workflow.

```sh
yarn image-codemod
```

This will run each script one by one.

### Workflow
1) Delete orphaned files. You can navigate to [`i18n_utility`]('../../../../scripts/i18n_utility/README.md) to read about the process.
2) Fetch all absolute image paths from `src/{content/docs/**/images, i18n/content/**/images}`.
3) Move all files from their absolute paths to `src/images`.
4) Delete any subdirectories and their files in content directories that were used for images.
5) Run the image codemod on every MDX file


### Cleaning up branch

Inside `src/codemods/convertMDXImages/`, there is a `cleanup.sh` bash file which restores any changed content back to the branch's original state in git.

> If there is issues running the bash script, try `chmod +x` on the file to giver user run access.



