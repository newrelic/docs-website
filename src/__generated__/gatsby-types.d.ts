/* eslint-disable */

declare namespace GatsbyTypes {
type Maybe<T> = T | undefined;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: string;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: never;
};










type File = Node & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly blksize: Maybe<Scalars['Int']>;
  readonly blocks: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  readonly publicURL: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type ImageSharp */
  readonly childrenImageSharp: Maybe<ReadonlyArray<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  readonly childImageSharp: Maybe<ImageSharp>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  readonly childrenMarkdownRemark: Maybe<ReadonlyArray<Maybe<MarkdownRemark>>>;
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  readonly childMarkdownRemark: Maybe<MarkdownRemark>;
  /** Returns all children nodes filtered by type Mdx */
  readonly childrenMdx: Maybe<ReadonlyArray<Maybe<Mdx>>>;
  /** Returns the first child node of type Mdx or null if there are no children of given type on this node */
  readonly childMdx: Maybe<Mdx>;
  /** Returns all children nodes filtered by type NavYaml */
  readonly childrenNavYaml: Maybe<ReadonlyArray<Maybe<NavYaml>>>;
  /** Returns the first child node of type NavYaml or null if there are no children of given type on this node */
  readonly childNavYaml: Maybe<NavYaml>;
  /** Returns all children nodes filtered by type TranslatedNavJson */
  readonly childrenTranslatedNavJson: Maybe<ReadonlyArray<Maybe<TranslatedNavJson>>>;
  /** Returns the first child node of type TranslatedNavJson or null if there are no children of given type on this node */
  readonly childTranslatedNavJson: Maybe<TranslatedNavJson>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type File_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_atimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_mtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_ctimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

/** Node Interface */
type Node = {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type Internal = {
  readonly content: Maybe<Scalars['String']>;
  readonly contentDigest: Scalars['String'];
  readonly description: Maybe<Scalars['String']>;
  readonly fieldOwners: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ignoreType: Maybe<Scalars['Boolean']>;
  readonly mediaType: Maybe<Scalars['String']>;
  readonly owner: Scalars['String'];
  readonly type: Scalars['String'];
};


type Directory = Node & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Directory_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_atimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_mtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_ctimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type Site = Node & {
  readonly buildTime: Maybe<Scalars['Date']>;
  readonly siteMetadata: Maybe<SiteSiteMetadata>;
  readonly port: Maybe<Scalars['Int']>;
  readonly host: Maybe<Scalars['String']>;
  readonly flags: Maybe<SiteFlags>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly layout: Maybe<SiteLayout>;
};


type Site_buildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type SiteFlags = {
  readonly DEV_SSR: Maybe<Scalars['Boolean']>;
  readonly PRESERVE_FILE_DOWNLOAD_CACHE: Maybe<Scalars['Boolean']>;
};

type SiteSiteMetadata = {
  readonly title: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly repository: Maybe<Scalars['String']>;
  readonly branch: Scalars['String'];
  readonly contributingUrl: Maybe<Scalars['String']>;
  readonly titleTemplate: Maybe<Scalars['String']>;
  readonly author: Maybe<Scalars['String']>;
  readonly siteUrl: Maybe<Scalars['String']>;
};

type SiteFunction = Node & {
  readonly functionRoute: Scalars['String'];
  readonly pluginName: Scalars['String'];
  readonly originalAbsoluteFilePath: Scalars['String'];
  readonly originalRelativeFilePath: Scalars['String'];
  readonly relativeCompiledFilePath: Scalars['String'];
  readonly absoluteCompiledFilePath: Scalars['String'];
  readonly matchPath: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type SitePage = Node & {
  readonly path: Scalars['String'];
  readonly component: Scalars['String'];
  readonly internalComponentName: Scalars['String'];
  readonly componentChunkName: Scalars['String'];
  readonly matchPath: Maybe<Scalars['String']>;
  readonly pageContext: Maybe<Scalars['JSON']>;
  readonly pluginCreator: Maybe<SitePlugin>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type SitePlugin = Node & {
  readonly resolve: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly nodeAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly browserAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ssrAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly pluginFilepath: Maybe<Scalars['String']>;
  readonly pluginOptions: Maybe<Scalars['JSON']>;
  readonly packageJson: Maybe<Scalars['JSON']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type SiteBuildMetadata = Node & {
  readonly buildTime: Maybe<Scalars['Date']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type SiteBuildMetadata_buildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type ImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'jpg'
  | 'png'
  | 'webp'
  | 'avif';

type ImageFit =
  | 'cover'
  | 'contain'
  | 'fill'
  | 'inside'
  | 'outside';

type ImageLayout =
  | 'fixed'
  | 'fullWidth'
  | 'constrained';

type ImageCropFocus =
  | 'CENTER'
  | 1
  | 5
  | 2
  | 6
  | 3
  | 7
  | 4
  | 8
  | 16
  | 17;

type DuotoneGradient = {
  readonly highlight: Scalars['String'];
  readonly shadow: Scalars['String'];
  readonly opacity: Maybe<Scalars['Int']>;
};

type PotraceTurnPolicy =
  | 'black'
  | 'white'
  | 'left'
  | 'right'
  | 'minority'
  | 'majority';

type Potrace = {
  readonly turnPolicy: Maybe<PotraceTurnPolicy>;
  readonly turdSize: Maybe<Scalars['Float']>;
  readonly alphaMax: Maybe<Scalars['Float']>;
  readonly optCurve: Maybe<Scalars['Boolean']>;
  readonly optTolerance: Maybe<Scalars['Float']>;
  readonly threshold: Maybe<Scalars['Int']>;
  readonly blackOnWhite: Maybe<Scalars['Boolean']>;
  readonly color: Maybe<Scalars['String']>;
  readonly background: Maybe<Scalars['String']>;
};

type ImageSharp = Node & {
  readonly fixed: Maybe<ImageSharpFixed>;
  readonly fluid: Maybe<ImageSharpFluid>;
  readonly gatsbyImageData: Scalars['JSON'];
  readonly original: Maybe<ImageSharpOriginal>;
  readonly resize: Maybe<ImageSharpResize>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ImageSharp_fixedArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


type ImageSharp_fluidArgs = {
  maxWidth: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};


type ImageSharp_gatsbyImageDataArgs = {
  layout?: Maybe<ImageLayout>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  placeholder: Maybe<ImagePlaceholder>;
  blurredOptions: Maybe<BlurredOptions>;
  tracedSVGOptions: Maybe<Potrace>;
  formats: Maybe<ReadonlyArray<Maybe<ImageFormat>>>;
  outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sizes: Maybe<Scalars['String']>;
  quality: Maybe<Scalars['Int']>;
  jpgOptions: Maybe<JPGOptions>;
  pngOptions: Maybe<PNGOptions>;
  webpOptions: Maybe<WebPOptions>;
  avifOptions: Maybe<AVIFOptions>;
  transformOptions: Maybe<TransformOptions>;
  backgroundColor: Maybe<Scalars['String']>;
};


type ImageSharp_resizeArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

type ImageSharpFixed = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly width: Scalars['Float'];
  readonly height: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type ImageSharpFluid = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly sizes: Scalars['String'];
  readonly originalImg: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
  readonly presentationWidth: Scalars['Int'];
  readonly presentationHeight: Scalars['Int'];
};

type ImagePlaceholder =
  | 'dominantColor'
  | 'tracedSVG'
  | 'blurred'
  | 'none';

type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  readonly width: Maybe<Scalars['Int']>;
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  readonly toFormat: Maybe<ImageFormat>;
};

type JPGOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly progressive: Maybe<Scalars['Boolean']>;
};

type PNGOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly compressionSpeed: Maybe<Scalars['Int']>;
};

type WebPOptions = {
  readonly quality: Maybe<Scalars['Int']>;
};

type AVIFOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly lossless: Maybe<Scalars['Boolean']>;
  readonly speed: Maybe<Scalars['Int']>;
};

type TransformOptions = {
  readonly grayscale: Maybe<Scalars['Boolean']>;
  readonly duotone: Maybe<DuotoneGradient>;
  readonly rotate: Maybe<Scalars['Int']>;
  readonly trim: Maybe<Scalars['Float']>;
  readonly cropFocus: Maybe<ImageCropFocus>;
  readonly fit: Maybe<ImageFit>;
};

type ImageSharpOriginal = {
  readonly width: Maybe<Scalars['Float']>;
  readonly height: Maybe<Scalars['Float']>;
  readonly src: Maybe<Scalars['String']>;
};

type ImageSharpResize = {
  readonly src: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type SiteLayout = {
  readonly contentPadding: Maybe<Scalars['String']>;
  readonly maxWidth: Maybe<Scalars['String']>;
  readonly mobileBreakpoint: Maybe<Scalars['String']>;
};

type MdxFrontmatter = {
  readonly startDate: Maybe<Scalars['Date']>;
  readonly endDate: Maybe<Scalars['Date']>;
  readonly title: Scalars['String'];
};


type MdxFrontmatter_startDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type MdxFrontmatter_endDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type Locale = Node & {
  readonly name: Scalars['String'];
  readonly localName: Scalars['String'];
  readonly locale: Scalars['String'];
  readonly hrefLang: Scalars['String'];
  readonly isDefault: Scalars['Boolean'];
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type RelatedResource = Node & {
  readonly id: Scalars['ID'];
  readonly title: Scalars['String'];
  readonly url: Scalars['String'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type NewRelicThemeConfig = Node & {
  readonly env: Scalars['String'];
  readonly relatedResources: NewRelicThemeRelatedResourceConfig;
  readonly tessen: Maybe<NewRelicThemeTessenConfig>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type NewRelicThemeRelatedResourceConfig = {
  readonly labels: ReadonlyArray<RelatedResourceLabel>;
};

type RelatedResourceLabel = {
  readonly baseUrl: Scalars['String'];
  readonly label: Scalars['String'];
};

type NewRelicThemeTessenConfig = {
  readonly product: Maybe<Scalars['String']>;
  readonly subproduct: Maybe<Scalars['String']>;
};

type MarkdownHeading = {
  readonly id: Maybe<Scalars['String']>;
  readonly value: Maybe<Scalars['String']>;
  readonly depth: Maybe<Scalars['Int']>;
};

type MarkdownHeadingLevels =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

type MarkdownExcerptFormats =
  | 'PLAIN'
  | 'HTML'
  | 'MARKDOWN';

type MarkdownWordCount = {
  readonly paragraphs: Maybe<Scalars['Int']>;
  readonly sentences: Maybe<Scalars['Int']>;
  readonly words: Maybe<Scalars['Int']>;
};

type MarkdownRemark = Node & {
  readonly id: Scalars['ID'];
  readonly frontmatter: Maybe<Frontmatter>;
  readonly excerpt: Maybe<Scalars['String']>;
  readonly rawMarkdownBody: Maybe<Scalars['String']>;
  readonly fileAbsolutePath: Maybe<Scalars['String']>;
  readonly fields: Maybe<MarkdownRemarkFields>;
  readonly html: Maybe<Scalars['String']>;
  readonly htmlAst: Maybe<Scalars['JSON']>;
  readonly excerptAst: Maybe<Scalars['JSON']>;
  readonly headings: Maybe<ReadonlyArray<Maybe<MarkdownHeading>>>;
  readonly timeToRead: Maybe<Scalars['Int']>;
  readonly tableOfContents: Maybe<Scalars['String']>;
  readonly wordCount: Maybe<MarkdownWordCount>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type MarkdownRemark_excerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
  format?: Maybe<MarkdownExcerptFormats>;
};


type MarkdownRemark_excerptAstArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};


type MarkdownRemark_headingsArgs = {
  depth: Maybe<MarkdownHeadingLevels>;
};


type MarkdownRemark_tableOfContentsArgs = {
  absolute?: Maybe<Scalars['Boolean']>;
  pathToSlugField?: Maybe<Scalars['String']>;
  maxDepth: Maybe<Scalars['Int']>;
  heading: Maybe<Scalars['String']>;
};

type MarkdownRemarkFields = {
  readonly fileRelativePath: Maybe<Scalars['String']>;
  readonly slug: Maybe<Scalars['String']>;
};

type MdxHeadingMdx = {
  readonly value: Maybe<Scalars['String']>;
  readonly depth: Maybe<Scalars['Int']>;
};

type HeadingsMdx =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

type MdxWordCount = {
  readonly paragraphs: Maybe<Scalars['Int']>;
  readonly sentences: Maybe<Scalars['Int']>;
  readonly words: Maybe<Scalars['Int']>;
};

type Mdx = Node & {
  readonly rawBody: Scalars['String'];
  readonly fileAbsolutePath: Scalars['String'];
  readonly frontmatter: Maybe<Frontmatter>;
  readonly slug: Maybe<Scalars['String']>;
  readonly body: Scalars['String'];
  readonly excerpt: Scalars['String'];
  readonly headings: Maybe<ReadonlyArray<Maybe<MdxHeadingMdx>>>;
  readonly html: Maybe<Scalars['String']>;
  readonly mdxAST: Maybe<Scalars['JSON']>;
  readonly tableOfContents: Maybe<Scalars['JSON']>;
  readonly timeToRead: Maybe<Scalars['Int']>;
  readonly wordCount: Maybe<MdxWordCount>;
  readonly fields: Maybe<MdxFields>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly relatedResources: Maybe<ReadonlyArray<RelatedResource>>;
};


type Mdx_excerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};


type Mdx_headingsArgs = {
  depth: Maybe<HeadingsMdx>;
};


type Mdx_tableOfContentsArgs = {
  maxDepth: Maybe<Scalars['Int']>;
};


type Mdx_relatedResourcesArgs = {
  limit?: Maybe<Scalars['Int']>;
};

type MdxFields = {
  readonly fileRelativePath: Maybe<Scalars['String']>;
  readonly slug: Maybe<Scalars['String']>;
};

type DataDictionaryEvent = Node & {
  readonly name: Scalars['String'];
  readonly definition: Maybe<MarkdownRemark>;
  readonly dataSources: ReadonlyArray<Scalars['String']>;
  readonly fileRelativePath: Maybe<Scalars['String']>;
  readonly plugin: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type DataDictionaryAttribute */
  readonly childrenDataDictionaryAttribute: Maybe<ReadonlyArray<Maybe<DataDictionaryAttribute>>>;
  /** Returns the first child node of type DataDictionaryAttribute or null if there are no children of given type on this node */
  readonly childDataDictionaryAttribute: Maybe<DataDictionaryAttribute>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type DataDictionaryAttribute = Node & {
  readonly name: Scalars['String'];
  readonly definition: MarkdownRemark;
  readonly events: ReadonlyArray<DataDictionaryEvent>;
  readonly units: Maybe<Scalars['String']>;
  readonly fileRelativePath: Maybe<Scalars['String']>;
  readonly plugin: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type Nav = {
  readonly id: Scalars['ID'];
  readonly title: Maybe<Scalars['String']>;
  readonly filterable: Scalars['Boolean'];
  readonly url: Maybe<Scalars['String']>;
  readonly pages: ReadonlyArray<NavItem>;
};


type Nav_titleArgs = {
  locale?: Maybe<Scalars['String']>;
};

type NavItem = {
  readonly id: Scalars['ID'];
  readonly title: Scalars['String'];
  readonly icon: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
  readonly pages: ReadonlyArray<NavItem>;
};


type NavItem_titleArgs = {
  locale?: Maybe<Scalars['String']>;
};

type NavYaml = Node & {
  readonly id: Scalars['ID'];
  readonly title: Scalars['String'];
  readonly path: Maybe<Scalars['String']>;
  readonly icon: Maybe<Scalars['String']>;
  readonly filterable: Scalars['Boolean'];
  readonly pages: ReadonlyArray<NavYaml>;
  readonly rootNav: Scalars['Boolean'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type Frontmatter = {
  readonly isFeatured: Maybe<Scalars['Boolean']>;
  readonly translationType: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['String']>;
  readonly subject: Maybe<Scalars['String']>;
  readonly releaseDate: Maybe<Scalars['Date']>;
  readonly version: Maybe<Scalars['String']>;
  readonly downloadLink: Maybe<Scalars['String']>;
  readonly redirects: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly tags: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly metaDescription: Maybe<Scalars['String']>;
  readonly type: Maybe<Scalars['String']>;
  readonly translate: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly shortDescription: Maybe<Scalars['String']>;
  readonly template: Maybe<Scalars['String']>;
  readonly topics: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly contentType: Maybe<Scalars['String']>;
  readonly s_Google_Cloud_Spanner_integration: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly s_legacy_SNMP_integration: Maybe<Scalars['String']>;
  readonly startDate: Maybe<Scalars['Date']>;
  readonly endDate: Maybe<Scalars['Date']>;
  readonly name: Maybe<Scalars['String']>;
  readonly events: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly units: Maybe<Scalars['String']>;
  readonly summary: Maybe<Scalars['String']>;
  readonly learnMoreLink: Maybe<Scalars['String']>;
  readonly dataSources: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly getStartedLink: Maybe<Scalars['String']>;
};


type Frontmatter_releaseDateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Frontmatter_startDateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Frontmatter_endDateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type TranslatedNavJson = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly title: Maybe<Scalars['String']>;
  readonly englishTitle: Maybe<Scalars['String']>;
  readonly locale: Maybe<Scalars['String']>;
};

type Query = {
  readonly file: Maybe<File>;
  readonly allFile: FileConnection;
  readonly directory: Maybe<Directory>;
  readonly allDirectory: DirectoryConnection;
  readonly site: Maybe<Site>;
  readonly allSite: SiteConnection;
  readonly siteFunction: Maybe<SiteFunction>;
  readonly allSiteFunction: SiteFunctionConnection;
  readonly sitePage: Maybe<SitePage>;
  readonly allSitePage: SitePageConnection;
  readonly sitePlugin: Maybe<SitePlugin>;
  readonly allSitePlugin: SitePluginConnection;
  readonly siteBuildMetadata: Maybe<SiteBuildMetadata>;
  readonly allSiteBuildMetadata: SiteBuildMetadataConnection;
  readonly imageSharp: Maybe<ImageSharp>;
  readonly allImageSharp: ImageSharpConnection;
  readonly locale: Maybe<Locale>;
  readonly allLocale: LocaleConnection;
  readonly relatedResource: Maybe<RelatedResource>;
  readonly allRelatedResource: RelatedResourceConnection;
  readonly newRelicThemeConfig: Maybe<NewRelicThemeConfig>;
  readonly allNewRelicThemeConfig: NewRelicThemeConfigConnection;
  readonly markdownRemark: Maybe<MarkdownRemark>;
  readonly allMarkdownRemark: MarkdownRemarkConnection;
  readonly mdx: Maybe<Mdx>;
  readonly allMdx: MdxConnection;
  readonly dataDictionaryEvent: Maybe<DataDictionaryEvent>;
  readonly allDataDictionaryEvent: DataDictionaryEventConnection;
  readonly dataDictionaryAttribute: Maybe<DataDictionaryAttribute>;
  readonly allDataDictionaryAttribute: DataDictionaryAttributeConnection;
  readonly navYaml: Maybe<NavYaml>;
  readonly allNavYaml: NavYamlConnection;
  readonly translatedNavJson: Maybe<TranslatedNavJson>;
  readonly allTranslatedNavJson: TranslatedNavJsonConnection;
  readonly nav: Maybe<Nav>;
};


type Query_fileArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  publicURL: Maybe<StringQueryOperatorInput>;
  childrenImageSharp: Maybe<ImageSharpFilterListInput>;
  childImageSharp: Maybe<ImageSharpFilterInput>;
  childrenMarkdownRemark: Maybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
  childrenMdx: Maybe<MdxFilterListInput>;
  childMdx: Maybe<MdxFilterInput>;
  childrenNavYaml: Maybe<NavYamlFilterListInput>;
  childNavYaml: Maybe<NavYamlFilterInput>;
  childrenTranslatedNavJson: Maybe<TranslatedNavJsonFilterListInput>;
  childTranslatedNavJson: Maybe<TranslatedNavJsonFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allFileArgs = {
  filter: Maybe<FileFilterInput>;
  sort: Maybe<FileSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_directoryArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allDirectoryArgs = {
  filter: Maybe<DirectoryFilterInput>;
  sort: Maybe<DirectorySortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteArgs = {
  buildTime: Maybe<DateQueryOperatorInput>;
  siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  port: Maybe<IntQueryOperatorInput>;
  host: Maybe<StringQueryOperatorInput>;
  flags: Maybe<SiteFlagsFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSiteArgs = {
  filter: Maybe<SiteFilterInput>;
  sort: Maybe<SiteSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteFunctionArgs = {
  functionRoute: Maybe<StringQueryOperatorInput>;
  pluginName: Maybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath: Maybe<StringQueryOperatorInput>;
  originalRelativeFilePath: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath: Maybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSiteFunctionArgs = {
  filter: Maybe<SiteFunctionFilterInput>;
  sort: Maybe<SiteFunctionSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sitePageArgs = {
  path: Maybe<StringQueryOperatorInput>;
  component: Maybe<StringQueryOperatorInput>;
  internalComponentName: Maybe<StringQueryOperatorInput>;
  componentChunkName: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  pageContext: Maybe<JSONQueryOperatorInput>;
  pluginCreator: Maybe<SitePluginFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSitePageArgs = {
  filter: Maybe<SitePageFilterInput>;
  sort: Maybe<SitePageSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sitePluginArgs = {
  resolve: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
  nodeAPIs: Maybe<StringQueryOperatorInput>;
  browserAPIs: Maybe<StringQueryOperatorInput>;
  ssrAPIs: Maybe<StringQueryOperatorInput>;
  pluginFilepath: Maybe<StringQueryOperatorInput>;
  pluginOptions: Maybe<JSONQueryOperatorInput>;
  packageJson: Maybe<JSONQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSitePluginArgs = {
  filter: Maybe<SitePluginFilterInput>;
  sort: Maybe<SitePluginSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteBuildMetadataArgs = {
  buildTime: Maybe<DateQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSiteBuildMetadataArgs = {
  filter: Maybe<SiteBuildMetadataFilterInput>;
  sort: Maybe<SiteBuildMetadataSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_imageSharpArgs = {
  fixed: Maybe<ImageSharpFixedFilterInput>;
  fluid: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  original: Maybe<ImageSharpOriginalFilterInput>;
  resize: Maybe<ImageSharpResizeFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allImageSharpArgs = {
  filter: Maybe<ImageSharpFilterInput>;
  sort: Maybe<ImageSharpSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_localeArgs = {
  name: Maybe<StringQueryOperatorInput>;
  localName: Maybe<StringQueryOperatorInput>;
  locale: Maybe<StringQueryOperatorInput>;
  hrefLang: Maybe<StringQueryOperatorInput>;
  isDefault: Maybe<BooleanQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allLocaleArgs = {
  filter: Maybe<LocaleFilterInput>;
  sort: Maybe<LocaleSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_relatedResourceArgs = {
  id: Maybe<StringQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  url: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allRelatedResourceArgs = {
  filter: Maybe<RelatedResourceFilterInput>;
  sort: Maybe<RelatedResourceSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_newRelicThemeConfigArgs = {
  env: Maybe<StringQueryOperatorInput>;
  relatedResources: Maybe<NewRelicThemeRelatedResourceConfigFilterInput>;
  tessen: Maybe<NewRelicThemeTessenConfigFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allNewRelicThemeConfigArgs = {
  filter: Maybe<NewRelicThemeConfigFilterInput>;
  sort: Maybe<NewRelicThemeConfigSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_markdownRemarkArgs = {
  id: Maybe<StringQueryOperatorInput>;
  frontmatter: Maybe<FrontmatterFilterInput>;
  excerpt: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath: Maybe<StringQueryOperatorInput>;
  fields: Maybe<MarkdownRemarkFieldsFilterInput>;
  html: Maybe<StringQueryOperatorInput>;
  htmlAst: Maybe<JSONQueryOperatorInput>;
  excerptAst: Maybe<JSONQueryOperatorInput>;
  headings: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead: Maybe<IntQueryOperatorInput>;
  tableOfContents: Maybe<StringQueryOperatorInput>;
  wordCount: Maybe<MarkdownWordCountFilterInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allMarkdownRemarkArgs = {
  filter: Maybe<MarkdownRemarkFilterInput>;
  sort: Maybe<MarkdownRemarkSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_mdxArgs = {
  rawBody: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath: Maybe<StringQueryOperatorInput>;
  frontmatter: Maybe<FrontmatterFilterInput>;
  slug: Maybe<StringQueryOperatorInput>;
  body: Maybe<StringQueryOperatorInput>;
  excerpt: Maybe<StringQueryOperatorInput>;
  headings: Maybe<MdxHeadingMdxFilterListInput>;
  html: Maybe<StringQueryOperatorInput>;
  mdxAST: Maybe<JSONQueryOperatorInput>;
  tableOfContents: Maybe<JSONQueryOperatorInput>;
  timeToRead: Maybe<IntQueryOperatorInput>;
  wordCount: Maybe<MdxWordCountFilterInput>;
  fields: Maybe<MdxFieldsFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allMdxArgs = {
  filter: Maybe<MdxFilterInput>;
  sort: Maybe<MdxSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_dataDictionaryEventArgs = {
  name: Maybe<StringQueryOperatorInput>;
  definition: Maybe<MarkdownRemarkFilterInput>;
  dataSources: Maybe<StringQueryOperatorInput>;
  fileRelativePath: Maybe<StringQueryOperatorInput>;
  plugin: Maybe<StringQueryOperatorInput>;
  childrenDataDictionaryAttribute: Maybe<DataDictionaryAttributeFilterListInput>;
  childDataDictionaryAttribute: Maybe<DataDictionaryAttributeFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allDataDictionaryEventArgs = {
  filter: Maybe<DataDictionaryEventFilterInput>;
  sort: Maybe<DataDictionaryEventSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_dataDictionaryAttributeArgs = {
  name: Maybe<StringQueryOperatorInput>;
  definition: Maybe<MarkdownRemarkFilterInput>;
  events: Maybe<DataDictionaryEventFilterListInput>;
  units: Maybe<StringQueryOperatorInput>;
  fileRelativePath: Maybe<StringQueryOperatorInput>;
  plugin: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allDataDictionaryAttributeArgs = {
  filter: Maybe<DataDictionaryAttributeFilterInput>;
  sort: Maybe<DataDictionaryAttributeSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_navYamlArgs = {
  id: Maybe<StringQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  path: Maybe<StringQueryOperatorInput>;
  icon: Maybe<StringQueryOperatorInput>;
  filterable: Maybe<BooleanQueryOperatorInput>;
  pages: Maybe<NavYamlFilterListInput>;
  rootNav: Maybe<BooleanQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allNavYamlArgs = {
  filter: Maybe<NavYamlFilterInput>;
  sort: Maybe<NavYamlSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_translatedNavJsonArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  title: Maybe<StringQueryOperatorInput>;
  englishTitle: Maybe<StringQueryOperatorInput>;
  locale: Maybe<StringQueryOperatorInput>;
};


type Query_allTranslatedNavJsonArgs = {
  filter: Maybe<TranslatedNavJsonFilterInput>;
  sort: Maybe<TranslatedNavJsonSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_navArgs = {
  slug: Scalars['String'];
};

type StringQueryOperatorInput = {
  readonly eq: Maybe<Scalars['String']>;
  readonly ne: Maybe<Scalars['String']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly regex: Maybe<Scalars['String']>;
  readonly glob: Maybe<Scalars['String']>;
};

type IntQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Int']>;
  readonly ne: Maybe<Scalars['Int']>;
  readonly gt: Maybe<Scalars['Int']>;
  readonly gte: Maybe<Scalars['Int']>;
  readonly lt: Maybe<Scalars['Int']>;
  readonly lte: Maybe<Scalars['Int']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};

type DateQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Date']>;
  readonly ne: Maybe<Scalars['Date']>;
  readonly gt: Maybe<Scalars['Date']>;
  readonly gte: Maybe<Scalars['Date']>;
  readonly lt: Maybe<Scalars['Date']>;
  readonly lte: Maybe<Scalars['Date']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
};

type FloatQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Float']>;
  readonly ne: Maybe<Scalars['Float']>;
  readonly gt: Maybe<Scalars['Float']>;
  readonly gte: Maybe<Scalars['Float']>;
  readonly lt: Maybe<Scalars['Float']>;
  readonly lte: Maybe<Scalars['Float']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
};

type ImageSharpFilterListInput = {
  readonly elemMatch: Maybe<ImageSharpFilterInput>;
};

type ImageSharpFilterInput = {
  readonly fixed: Maybe<ImageSharpFixedFilterInput>;
  readonly fluid: Maybe<ImageSharpFluidFilterInput>;
  readonly gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  readonly original: Maybe<ImageSharpOriginalFilterInput>;
  readonly resize: Maybe<ImageSharpResizeFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ImageSharpFixedFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type ImageSharpFluidFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly sizes: Maybe<StringQueryOperatorInput>;
  readonly originalImg: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
  readonly presentationWidth: Maybe<IntQueryOperatorInput>;
  readonly presentationHeight: Maybe<IntQueryOperatorInput>;
};

type JSONQueryOperatorInput = {
  readonly eq: Maybe<Scalars['JSON']>;
  readonly ne: Maybe<Scalars['JSON']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly regex: Maybe<Scalars['JSON']>;
  readonly glob: Maybe<Scalars['JSON']>;
};

type ImageSharpOriginalFilterInput = {
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
};

type ImageSharpResizeFilterInput = {
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type NodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type NodeFilterListInput = {
  readonly elemMatch: Maybe<NodeFilterInput>;
};

type InternalFilterInput = {
  readonly content: Maybe<StringQueryOperatorInput>;
  readonly contentDigest: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly fieldOwners: Maybe<StringQueryOperatorInput>;
  readonly ignoreType: Maybe<BooleanQueryOperatorInput>;
  readonly mediaType: Maybe<StringQueryOperatorInput>;
  readonly owner: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
};

type BooleanQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Boolean']>;
  readonly ne: Maybe<Scalars['Boolean']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
};

type MarkdownRemarkFilterListInput = {
  readonly elemMatch: Maybe<MarkdownRemarkFilterInput>;
};

type MarkdownRemarkFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly frontmatter: Maybe<FrontmatterFilterInput>;
  readonly excerpt: Maybe<StringQueryOperatorInput>;
  readonly rawMarkdownBody: Maybe<StringQueryOperatorInput>;
  readonly fileAbsolutePath: Maybe<StringQueryOperatorInput>;
  readonly fields: Maybe<MarkdownRemarkFieldsFilterInput>;
  readonly html: Maybe<StringQueryOperatorInput>;
  readonly htmlAst: Maybe<JSONQueryOperatorInput>;
  readonly excerptAst: Maybe<JSONQueryOperatorInput>;
  readonly headings: Maybe<MarkdownHeadingFilterListInput>;
  readonly timeToRead: Maybe<IntQueryOperatorInput>;
  readonly tableOfContents: Maybe<StringQueryOperatorInput>;
  readonly wordCount: Maybe<MarkdownWordCountFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type FrontmatterFilterInput = {
  readonly isFeatured: Maybe<BooleanQueryOperatorInput>;
  readonly translationType: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly subject: Maybe<StringQueryOperatorInput>;
  readonly releaseDate: Maybe<DateQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly downloadLink: Maybe<StringQueryOperatorInput>;
  readonly redirects: Maybe<StringQueryOperatorInput>;
  readonly tags: Maybe<StringQueryOperatorInput>;
  readonly metaDescription: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly translate: Maybe<StringQueryOperatorInput>;
  readonly shortDescription: Maybe<StringQueryOperatorInput>;
  readonly template: Maybe<StringQueryOperatorInput>;
  readonly topics: Maybe<StringQueryOperatorInput>;
  readonly contentType: Maybe<StringQueryOperatorInput>;
  readonly s_Google_Cloud_Spanner_integration: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly s_legacy_SNMP_integration: Maybe<StringQueryOperatorInput>;
  readonly startDate: Maybe<DateQueryOperatorInput>;
  readonly endDate: Maybe<DateQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly events: Maybe<StringQueryOperatorInput>;
  readonly units: Maybe<StringQueryOperatorInput>;
  readonly summary: Maybe<StringQueryOperatorInput>;
  readonly learnMoreLink: Maybe<StringQueryOperatorInput>;
  readonly dataSources: Maybe<StringQueryOperatorInput>;
  readonly getStartedLink: Maybe<StringQueryOperatorInput>;
};

type MarkdownRemarkFieldsFilterInput = {
  readonly fileRelativePath: Maybe<StringQueryOperatorInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
};

type MarkdownHeadingFilterListInput = {
  readonly elemMatch: Maybe<MarkdownHeadingFilterInput>;
};

type MarkdownHeadingFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly value: Maybe<StringQueryOperatorInput>;
  readonly depth: Maybe<IntQueryOperatorInput>;
};

type MarkdownWordCountFilterInput = {
  readonly paragraphs: Maybe<IntQueryOperatorInput>;
  readonly sentences: Maybe<IntQueryOperatorInput>;
  readonly words: Maybe<IntQueryOperatorInput>;
};

type MdxFilterListInput = {
  readonly elemMatch: Maybe<MdxFilterInput>;
};

type MdxFilterInput = {
  readonly rawBody: Maybe<StringQueryOperatorInput>;
  readonly fileAbsolutePath: Maybe<StringQueryOperatorInput>;
  readonly frontmatter: Maybe<FrontmatterFilterInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly body: Maybe<StringQueryOperatorInput>;
  readonly excerpt: Maybe<StringQueryOperatorInput>;
  readonly headings: Maybe<MdxHeadingMdxFilterListInput>;
  readonly html: Maybe<StringQueryOperatorInput>;
  readonly mdxAST: Maybe<JSONQueryOperatorInput>;
  readonly tableOfContents: Maybe<JSONQueryOperatorInput>;
  readonly timeToRead: Maybe<IntQueryOperatorInput>;
  readonly wordCount: Maybe<MdxWordCountFilterInput>;
  readonly fields: Maybe<MdxFieldsFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type MdxHeadingMdxFilterListInput = {
  readonly elemMatch: Maybe<MdxHeadingMdxFilterInput>;
};

type MdxHeadingMdxFilterInput = {
  readonly value: Maybe<StringQueryOperatorInput>;
  readonly depth: Maybe<IntQueryOperatorInput>;
};

type MdxWordCountFilterInput = {
  readonly paragraphs: Maybe<IntQueryOperatorInput>;
  readonly sentences: Maybe<IntQueryOperatorInput>;
  readonly words: Maybe<IntQueryOperatorInput>;
};

type MdxFieldsFilterInput = {
  readonly fileRelativePath: Maybe<StringQueryOperatorInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
};

type NavYamlFilterListInput = {
  readonly elemMatch: Maybe<NavYamlFilterInput>;
};

type NavYamlFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly icon: Maybe<StringQueryOperatorInput>;
  readonly filterable: Maybe<BooleanQueryOperatorInput>;
  readonly pages: Maybe<NavYamlFilterListInput>;
  readonly rootNav: Maybe<BooleanQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type TranslatedNavJsonFilterListInput = {
  readonly elemMatch: Maybe<TranslatedNavJsonFilterInput>;
};

type TranslatedNavJsonFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly englishTitle: Maybe<StringQueryOperatorInput>;
  readonly locale: Maybe<StringQueryOperatorInput>;
};

type FileConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<FileGroupConnection>;
};


type FileConnection_distinctArgs = {
  field: FileFieldsEnum;
};


type FileConnection_maxArgs = {
  field: FileFieldsEnum;
};


type FileConnection_minArgs = {
  field: FileFieldsEnum;
};


type FileConnection_sumArgs = {
  field: FileFieldsEnum;
};


type FileConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

type FileEdge = {
  readonly next: Maybe<File>;
  readonly node: File;
  readonly previous: Maybe<File>;
};

type PageInfo = {
  readonly currentPage: Scalars['Int'];
  readonly hasPreviousPage: Scalars['Boolean'];
  readonly hasNextPage: Scalars['Boolean'];
  readonly itemCount: Scalars['Int'];
  readonly pageCount: Scalars['Int'];
  readonly perPage: Maybe<Scalars['Int']>;
  readonly totalCount: Scalars['Int'];
};

type FileFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'publicURL'
  | 'childrenImageSharp'
  | 'childrenImageSharp.fixed.base64'
  | 'childrenImageSharp.fixed.tracedSVG'
  | 'childrenImageSharp.fixed.aspectRatio'
  | 'childrenImageSharp.fixed.width'
  | 'childrenImageSharp.fixed.height'
  | 'childrenImageSharp.fixed.src'
  | 'childrenImageSharp.fixed.srcSet'
  | 'childrenImageSharp.fixed.srcWebp'
  | 'childrenImageSharp.fixed.srcSetWebp'
  | 'childrenImageSharp.fixed.originalName'
  | 'childrenImageSharp.fluid.base64'
  | 'childrenImageSharp.fluid.tracedSVG'
  | 'childrenImageSharp.fluid.aspectRatio'
  | 'childrenImageSharp.fluid.src'
  | 'childrenImageSharp.fluid.srcSet'
  | 'childrenImageSharp.fluid.srcWebp'
  | 'childrenImageSharp.fluid.srcSetWebp'
  | 'childrenImageSharp.fluid.sizes'
  | 'childrenImageSharp.fluid.originalImg'
  | 'childrenImageSharp.fluid.originalName'
  | 'childrenImageSharp.fluid.presentationWidth'
  | 'childrenImageSharp.fluid.presentationHeight'
  | 'childrenImageSharp.gatsbyImageData'
  | 'childrenImageSharp.original.width'
  | 'childrenImageSharp.original.height'
  | 'childrenImageSharp.original.src'
  | 'childrenImageSharp.resize.src'
  | 'childrenImageSharp.resize.tracedSVG'
  | 'childrenImageSharp.resize.width'
  | 'childrenImageSharp.resize.height'
  | 'childrenImageSharp.resize.aspectRatio'
  | 'childrenImageSharp.resize.originalName'
  | 'childrenImageSharp.id'
  | 'childrenImageSharp.parent.id'
  | 'childrenImageSharp.parent.parent.id'
  | 'childrenImageSharp.parent.parent.children'
  | 'childrenImageSharp.parent.children'
  | 'childrenImageSharp.parent.children.id'
  | 'childrenImageSharp.parent.children.children'
  | 'childrenImageSharp.parent.internal.content'
  | 'childrenImageSharp.parent.internal.contentDigest'
  | 'childrenImageSharp.parent.internal.description'
  | 'childrenImageSharp.parent.internal.fieldOwners'
  | 'childrenImageSharp.parent.internal.ignoreType'
  | 'childrenImageSharp.parent.internal.mediaType'
  | 'childrenImageSharp.parent.internal.owner'
  | 'childrenImageSharp.parent.internal.type'
  | 'childrenImageSharp.children'
  | 'childrenImageSharp.children.id'
  | 'childrenImageSharp.children.parent.id'
  | 'childrenImageSharp.children.parent.children'
  | 'childrenImageSharp.children.children'
  | 'childrenImageSharp.children.children.id'
  | 'childrenImageSharp.children.children.children'
  | 'childrenImageSharp.children.internal.content'
  | 'childrenImageSharp.children.internal.contentDigest'
  | 'childrenImageSharp.children.internal.description'
  | 'childrenImageSharp.children.internal.fieldOwners'
  | 'childrenImageSharp.children.internal.ignoreType'
  | 'childrenImageSharp.children.internal.mediaType'
  | 'childrenImageSharp.children.internal.owner'
  | 'childrenImageSharp.children.internal.type'
  | 'childrenImageSharp.internal.content'
  | 'childrenImageSharp.internal.contentDigest'
  | 'childrenImageSharp.internal.description'
  | 'childrenImageSharp.internal.fieldOwners'
  | 'childrenImageSharp.internal.ignoreType'
  | 'childrenImageSharp.internal.mediaType'
  | 'childrenImageSharp.internal.owner'
  | 'childrenImageSharp.internal.type'
  | 'childImageSharp.fixed.base64'
  | 'childImageSharp.fixed.tracedSVG'
  | 'childImageSharp.fixed.aspectRatio'
  | 'childImageSharp.fixed.width'
  | 'childImageSharp.fixed.height'
  | 'childImageSharp.fixed.src'
  | 'childImageSharp.fixed.srcSet'
  | 'childImageSharp.fixed.srcWebp'
  | 'childImageSharp.fixed.srcSetWebp'
  | 'childImageSharp.fixed.originalName'
  | 'childImageSharp.fluid.base64'
  | 'childImageSharp.fluid.tracedSVG'
  | 'childImageSharp.fluid.aspectRatio'
  | 'childImageSharp.fluid.src'
  | 'childImageSharp.fluid.srcSet'
  | 'childImageSharp.fluid.srcWebp'
  | 'childImageSharp.fluid.srcSetWebp'
  | 'childImageSharp.fluid.sizes'
  | 'childImageSharp.fluid.originalImg'
  | 'childImageSharp.fluid.originalName'
  | 'childImageSharp.fluid.presentationWidth'
  | 'childImageSharp.fluid.presentationHeight'
  | 'childImageSharp.gatsbyImageData'
  | 'childImageSharp.original.width'
  | 'childImageSharp.original.height'
  | 'childImageSharp.original.src'
  | 'childImageSharp.resize.src'
  | 'childImageSharp.resize.tracedSVG'
  | 'childImageSharp.resize.width'
  | 'childImageSharp.resize.height'
  | 'childImageSharp.resize.aspectRatio'
  | 'childImageSharp.resize.originalName'
  | 'childImageSharp.id'
  | 'childImageSharp.parent.id'
  | 'childImageSharp.parent.parent.id'
  | 'childImageSharp.parent.parent.children'
  | 'childImageSharp.parent.children'
  | 'childImageSharp.parent.children.id'
  | 'childImageSharp.parent.children.children'
  | 'childImageSharp.parent.internal.content'
  | 'childImageSharp.parent.internal.contentDigest'
  | 'childImageSharp.parent.internal.description'
  | 'childImageSharp.parent.internal.fieldOwners'
  | 'childImageSharp.parent.internal.ignoreType'
  | 'childImageSharp.parent.internal.mediaType'
  | 'childImageSharp.parent.internal.owner'
  | 'childImageSharp.parent.internal.type'
  | 'childImageSharp.children'
  | 'childImageSharp.children.id'
  | 'childImageSharp.children.parent.id'
  | 'childImageSharp.children.parent.children'
  | 'childImageSharp.children.children'
  | 'childImageSharp.children.children.id'
  | 'childImageSharp.children.children.children'
  | 'childImageSharp.children.internal.content'
  | 'childImageSharp.children.internal.contentDigest'
  | 'childImageSharp.children.internal.description'
  | 'childImageSharp.children.internal.fieldOwners'
  | 'childImageSharp.children.internal.ignoreType'
  | 'childImageSharp.children.internal.mediaType'
  | 'childImageSharp.children.internal.owner'
  | 'childImageSharp.children.internal.type'
  | 'childImageSharp.internal.content'
  | 'childImageSharp.internal.contentDigest'
  | 'childImageSharp.internal.description'
  | 'childImageSharp.internal.fieldOwners'
  | 'childImageSharp.internal.ignoreType'
  | 'childImageSharp.internal.mediaType'
  | 'childImageSharp.internal.owner'
  | 'childImageSharp.internal.type'
  | 'childrenMarkdownRemark'
  | 'childrenMarkdownRemark.id'
  | 'childrenMarkdownRemark.frontmatter.isFeatured'
  | 'childrenMarkdownRemark.frontmatter.translationType'
  | 'childrenMarkdownRemark.frontmatter.title'
  | 'childrenMarkdownRemark.frontmatter.subject'
  | 'childrenMarkdownRemark.frontmatter.releaseDate'
  | 'childrenMarkdownRemark.frontmatter.version'
  | 'childrenMarkdownRemark.frontmatter.downloadLink'
  | 'childrenMarkdownRemark.frontmatter.redirects'
  | 'childrenMarkdownRemark.frontmatter.tags'
  | 'childrenMarkdownRemark.frontmatter.metaDescription'
  | 'childrenMarkdownRemark.frontmatter.type'
  | 'childrenMarkdownRemark.frontmatter.translate'
  | 'childrenMarkdownRemark.frontmatter.shortDescription'
  | 'childrenMarkdownRemark.frontmatter.template'
  | 'childrenMarkdownRemark.frontmatter.topics'
  | 'childrenMarkdownRemark.frontmatter.contentType'
  | 'childrenMarkdownRemark.frontmatter.s_Google_Cloud_Spanner_integration'
  | 'childrenMarkdownRemark.frontmatter.description'
  | 'childrenMarkdownRemark.frontmatter.s_legacy_SNMP_integration'
  | 'childrenMarkdownRemark.frontmatter.startDate'
  | 'childrenMarkdownRemark.frontmatter.endDate'
  | 'childrenMarkdownRemark.frontmatter.name'
  | 'childrenMarkdownRemark.frontmatter.events'
  | 'childrenMarkdownRemark.frontmatter.units'
  | 'childrenMarkdownRemark.frontmatter.summary'
  | 'childrenMarkdownRemark.frontmatter.learnMoreLink'
  | 'childrenMarkdownRemark.frontmatter.dataSources'
  | 'childrenMarkdownRemark.frontmatter.getStartedLink'
  | 'childrenMarkdownRemark.excerpt'
  | 'childrenMarkdownRemark.rawMarkdownBody'
  | 'childrenMarkdownRemark.fileAbsolutePath'
  | 'childrenMarkdownRemark.fields.fileRelativePath'
  | 'childrenMarkdownRemark.fields.slug'
  | 'childrenMarkdownRemark.html'
  | 'childrenMarkdownRemark.htmlAst'
  | 'childrenMarkdownRemark.excerptAst'
  | 'childrenMarkdownRemark.headings'
  | 'childrenMarkdownRemark.headings.id'
  | 'childrenMarkdownRemark.headings.value'
  | 'childrenMarkdownRemark.headings.depth'
  | 'childrenMarkdownRemark.timeToRead'
  | 'childrenMarkdownRemark.tableOfContents'
  | 'childrenMarkdownRemark.wordCount.paragraphs'
  | 'childrenMarkdownRemark.wordCount.sentences'
  | 'childrenMarkdownRemark.wordCount.words'
  | 'childrenMarkdownRemark.parent.id'
  | 'childrenMarkdownRemark.parent.parent.id'
  | 'childrenMarkdownRemark.parent.parent.children'
  | 'childrenMarkdownRemark.parent.children'
  | 'childrenMarkdownRemark.parent.children.id'
  | 'childrenMarkdownRemark.parent.children.children'
  | 'childrenMarkdownRemark.parent.internal.content'
  | 'childrenMarkdownRemark.parent.internal.contentDigest'
  | 'childrenMarkdownRemark.parent.internal.description'
  | 'childrenMarkdownRemark.parent.internal.fieldOwners'
  | 'childrenMarkdownRemark.parent.internal.ignoreType'
  | 'childrenMarkdownRemark.parent.internal.mediaType'
  | 'childrenMarkdownRemark.parent.internal.owner'
  | 'childrenMarkdownRemark.parent.internal.type'
  | 'childrenMarkdownRemark.children'
  | 'childrenMarkdownRemark.children.id'
  | 'childrenMarkdownRemark.children.parent.id'
  | 'childrenMarkdownRemark.children.parent.children'
  | 'childrenMarkdownRemark.children.children'
  | 'childrenMarkdownRemark.children.children.id'
  | 'childrenMarkdownRemark.children.children.children'
  | 'childrenMarkdownRemark.children.internal.content'
  | 'childrenMarkdownRemark.children.internal.contentDigest'
  | 'childrenMarkdownRemark.children.internal.description'
  | 'childrenMarkdownRemark.children.internal.fieldOwners'
  | 'childrenMarkdownRemark.children.internal.ignoreType'
  | 'childrenMarkdownRemark.children.internal.mediaType'
  | 'childrenMarkdownRemark.children.internal.owner'
  | 'childrenMarkdownRemark.children.internal.type'
  | 'childrenMarkdownRemark.internal.content'
  | 'childrenMarkdownRemark.internal.contentDigest'
  | 'childrenMarkdownRemark.internal.description'
  | 'childrenMarkdownRemark.internal.fieldOwners'
  | 'childrenMarkdownRemark.internal.ignoreType'
  | 'childrenMarkdownRemark.internal.mediaType'
  | 'childrenMarkdownRemark.internal.owner'
  | 'childrenMarkdownRemark.internal.type'
  | 'childMarkdownRemark.id'
  | 'childMarkdownRemark.frontmatter.isFeatured'
  | 'childMarkdownRemark.frontmatter.translationType'
  | 'childMarkdownRemark.frontmatter.title'
  | 'childMarkdownRemark.frontmatter.subject'
  | 'childMarkdownRemark.frontmatter.releaseDate'
  | 'childMarkdownRemark.frontmatter.version'
  | 'childMarkdownRemark.frontmatter.downloadLink'
  | 'childMarkdownRemark.frontmatter.redirects'
  | 'childMarkdownRemark.frontmatter.tags'
  | 'childMarkdownRemark.frontmatter.metaDescription'
  | 'childMarkdownRemark.frontmatter.type'
  | 'childMarkdownRemark.frontmatter.translate'
  | 'childMarkdownRemark.frontmatter.shortDescription'
  | 'childMarkdownRemark.frontmatter.template'
  | 'childMarkdownRemark.frontmatter.topics'
  | 'childMarkdownRemark.frontmatter.contentType'
  | 'childMarkdownRemark.frontmatter.s_Google_Cloud_Spanner_integration'
  | 'childMarkdownRemark.frontmatter.description'
  | 'childMarkdownRemark.frontmatter.s_legacy_SNMP_integration'
  | 'childMarkdownRemark.frontmatter.startDate'
  | 'childMarkdownRemark.frontmatter.endDate'
  | 'childMarkdownRemark.frontmatter.name'
  | 'childMarkdownRemark.frontmatter.events'
  | 'childMarkdownRemark.frontmatter.units'
  | 'childMarkdownRemark.frontmatter.summary'
  | 'childMarkdownRemark.frontmatter.learnMoreLink'
  | 'childMarkdownRemark.frontmatter.dataSources'
  | 'childMarkdownRemark.frontmatter.getStartedLink'
  | 'childMarkdownRemark.excerpt'
  | 'childMarkdownRemark.rawMarkdownBody'
  | 'childMarkdownRemark.fileAbsolutePath'
  | 'childMarkdownRemark.fields.fileRelativePath'
  | 'childMarkdownRemark.fields.slug'
  | 'childMarkdownRemark.html'
  | 'childMarkdownRemark.htmlAst'
  | 'childMarkdownRemark.excerptAst'
  | 'childMarkdownRemark.headings'
  | 'childMarkdownRemark.headings.id'
  | 'childMarkdownRemark.headings.value'
  | 'childMarkdownRemark.headings.depth'
  | 'childMarkdownRemark.timeToRead'
  | 'childMarkdownRemark.tableOfContents'
  | 'childMarkdownRemark.wordCount.paragraphs'
  | 'childMarkdownRemark.wordCount.sentences'
  | 'childMarkdownRemark.wordCount.words'
  | 'childMarkdownRemark.parent.id'
  | 'childMarkdownRemark.parent.parent.id'
  | 'childMarkdownRemark.parent.parent.children'
  | 'childMarkdownRemark.parent.children'
  | 'childMarkdownRemark.parent.children.id'
  | 'childMarkdownRemark.parent.children.children'
  | 'childMarkdownRemark.parent.internal.content'
  | 'childMarkdownRemark.parent.internal.contentDigest'
  | 'childMarkdownRemark.parent.internal.description'
  | 'childMarkdownRemark.parent.internal.fieldOwners'
  | 'childMarkdownRemark.parent.internal.ignoreType'
  | 'childMarkdownRemark.parent.internal.mediaType'
  | 'childMarkdownRemark.parent.internal.owner'
  | 'childMarkdownRemark.parent.internal.type'
  | 'childMarkdownRemark.children'
  | 'childMarkdownRemark.children.id'
  | 'childMarkdownRemark.children.parent.id'
  | 'childMarkdownRemark.children.parent.children'
  | 'childMarkdownRemark.children.children'
  | 'childMarkdownRemark.children.children.id'
  | 'childMarkdownRemark.children.children.children'
  | 'childMarkdownRemark.children.internal.content'
  | 'childMarkdownRemark.children.internal.contentDigest'
  | 'childMarkdownRemark.children.internal.description'
  | 'childMarkdownRemark.children.internal.fieldOwners'
  | 'childMarkdownRemark.children.internal.ignoreType'
  | 'childMarkdownRemark.children.internal.mediaType'
  | 'childMarkdownRemark.children.internal.owner'
  | 'childMarkdownRemark.children.internal.type'
  | 'childMarkdownRemark.internal.content'
  | 'childMarkdownRemark.internal.contentDigest'
  | 'childMarkdownRemark.internal.description'
  | 'childMarkdownRemark.internal.fieldOwners'
  | 'childMarkdownRemark.internal.ignoreType'
  | 'childMarkdownRemark.internal.mediaType'
  | 'childMarkdownRemark.internal.owner'
  | 'childMarkdownRemark.internal.type'
  | 'childrenMdx'
  | 'childrenMdx.rawBody'
  | 'childrenMdx.fileAbsolutePath'
  | 'childrenMdx.frontmatter.isFeatured'
  | 'childrenMdx.frontmatter.translationType'
  | 'childrenMdx.frontmatter.title'
  | 'childrenMdx.frontmatter.subject'
  | 'childrenMdx.frontmatter.releaseDate'
  | 'childrenMdx.frontmatter.version'
  | 'childrenMdx.frontmatter.downloadLink'
  | 'childrenMdx.frontmatter.redirects'
  | 'childrenMdx.frontmatter.tags'
  | 'childrenMdx.frontmatter.metaDescription'
  | 'childrenMdx.frontmatter.type'
  | 'childrenMdx.frontmatter.translate'
  | 'childrenMdx.frontmatter.shortDescription'
  | 'childrenMdx.frontmatter.template'
  | 'childrenMdx.frontmatter.topics'
  | 'childrenMdx.frontmatter.contentType'
  | 'childrenMdx.frontmatter.s_Google_Cloud_Spanner_integration'
  | 'childrenMdx.frontmatter.description'
  | 'childrenMdx.frontmatter.s_legacy_SNMP_integration'
  | 'childrenMdx.frontmatter.startDate'
  | 'childrenMdx.frontmatter.endDate'
  | 'childrenMdx.frontmatter.name'
  | 'childrenMdx.frontmatter.events'
  | 'childrenMdx.frontmatter.units'
  | 'childrenMdx.frontmatter.summary'
  | 'childrenMdx.frontmatter.learnMoreLink'
  | 'childrenMdx.frontmatter.dataSources'
  | 'childrenMdx.frontmatter.getStartedLink'
  | 'childrenMdx.slug'
  | 'childrenMdx.body'
  | 'childrenMdx.excerpt'
  | 'childrenMdx.headings'
  | 'childrenMdx.headings.value'
  | 'childrenMdx.headings.depth'
  | 'childrenMdx.html'
  | 'childrenMdx.mdxAST'
  | 'childrenMdx.tableOfContents'
  | 'childrenMdx.timeToRead'
  | 'childrenMdx.wordCount.paragraphs'
  | 'childrenMdx.wordCount.sentences'
  | 'childrenMdx.wordCount.words'
  | 'childrenMdx.fields.fileRelativePath'
  | 'childrenMdx.fields.slug'
  | 'childrenMdx.id'
  | 'childrenMdx.parent.id'
  | 'childrenMdx.parent.parent.id'
  | 'childrenMdx.parent.parent.children'
  | 'childrenMdx.parent.children'
  | 'childrenMdx.parent.children.id'
  | 'childrenMdx.parent.children.children'
  | 'childrenMdx.parent.internal.content'
  | 'childrenMdx.parent.internal.contentDigest'
  | 'childrenMdx.parent.internal.description'
  | 'childrenMdx.parent.internal.fieldOwners'
  | 'childrenMdx.parent.internal.ignoreType'
  | 'childrenMdx.parent.internal.mediaType'
  | 'childrenMdx.parent.internal.owner'
  | 'childrenMdx.parent.internal.type'
  | 'childrenMdx.children'
  | 'childrenMdx.children.id'
  | 'childrenMdx.children.parent.id'
  | 'childrenMdx.children.parent.children'
  | 'childrenMdx.children.children'
  | 'childrenMdx.children.children.id'
  | 'childrenMdx.children.children.children'
  | 'childrenMdx.children.internal.content'
  | 'childrenMdx.children.internal.contentDigest'
  | 'childrenMdx.children.internal.description'
  | 'childrenMdx.children.internal.fieldOwners'
  | 'childrenMdx.children.internal.ignoreType'
  | 'childrenMdx.children.internal.mediaType'
  | 'childrenMdx.children.internal.owner'
  | 'childrenMdx.children.internal.type'
  | 'childrenMdx.internal.content'
  | 'childrenMdx.internal.contentDigest'
  | 'childrenMdx.internal.description'
  | 'childrenMdx.internal.fieldOwners'
  | 'childrenMdx.internal.ignoreType'
  | 'childrenMdx.internal.mediaType'
  | 'childrenMdx.internal.owner'
  | 'childrenMdx.internal.type'
  | 'childMdx.rawBody'
  | 'childMdx.fileAbsolutePath'
  | 'childMdx.frontmatter.isFeatured'
  | 'childMdx.frontmatter.translationType'
  | 'childMdx.frontmatter.title'
  | 'childMdx.frontmatter.subject'
  | 'childMdx.frontmatter.releaseDate'
  | 'childMdx.frontmatter.version'
  | 'childMdx.frontmatter.downloadLink'
  | 'childMdx.frontmatter.redirects'
  | 'childMdx.frontmatter.tags'
  | 'childMdx.frontmatter.metaDescription'
  | 'childMdx.frontmatter.type'
  | 'childMdx.frontmatter.translate'
  | 'childMdx.frontmatter.shortDescription'
  | 'childMdx.frontmatter.template'
  | 'childMdx.frontmatter.topics'
  | 'childMdx.frontmatter.contentType'
  | 'childMdx.frontmatter.s_Google_Cloud_Spanner_integration'
  | 'childMdx.frontmatter.description'
  | 'childMdx.frontmatter.s_legacy_SNMP_integration'
  | 'childMdx.frontmatter.startDate'
  | 'childMdx.frontmatter.endDate'
  | 'childMdx.frontmatter.name'
  | 'childMdx.frontmatter.events'
  | 'childMdx.frontmatter.units'
  | 'childMdx.frontmatter.summary'
  | 'childMdx.frontmatter.learnMoreLink'
  | 'childMdx.frontmatter.dataSources'
  | 'childMdx.frontmatter.getStartedLink'
  | 'childMdx.slug'
  | 'childMdx.body'
  | 'childMdx.excerpt'
  | 'childMdx.headings'
  | 'childMdx.headings.value'
  | 'childMdx.headings.depth'
  | 'childMdx.html'
  | 'childMdx.mdxAST'
  | 'childMdx.tableOfContents'
  | 'childMdx.timeToRead'
  | 'childMdx.wordCount.paragraphs'
  | 'childMdx.wordCount.sentences'
  | 'childMdx.wordCount.words'
  | 'childMdx.fields.fileRelativePath'
  | 'childMdx.fields.slug'
  | 'childMdx.id'
  | 'childMdx.parent.id'
  | 'childMdx.parent.parent.id'
  | 'childMdx.parent.parent.children'
  | 'childMdx.parent.children'
  | 'childMdx.parent.children.id'
  | 'childMdx.parent.children.children'
  | 'childMdx.parent.internal.content'
  | 'childMdx.parent.internal.contentDigest'
  | 'childMdx.parent.internal.description'
  | 'childMdx.parent.internal.fieldOwners'
  | 'childMdx.parent.internal.ignoreType'
  | 'childMdx.parent.internal.mediaType'
  | 'childMdx.parent.internal.owner'
  | 'childMdx.parent.internal.type'
  | 'childMdx.children'
  | 'childMdx.children.id'
  | 'childMdx.children.parent.id'
  | 'childMdx.children.parent.children'
  | 'childMdx.children.children'
  | 'childMdx.children.children.id'
  | 'childMdx.children.children.children'
  | 'childMdx.children.internal.content'
  | 'childMdx.children.internal.contentDigest'
  | 'childMdx.children.internal.description'
  | 'childMdx.children.internal.fieldOwners'
  | 'childMdx.children.internal.ignoreType'
  | 'childMdx.children.internal.mediaType'
  | 'childMdx.children.internal.owner'
  | 'childMdx.children.internal.type'
  | 'childMdx.internal.content'
  | 'childMdx.internal.contentDigest'
  | 'childMdx.internal.description'
  | 'childMdx.internal.fieldOwners'
  | 'childMdx.internal.ignoreType'
  | 'childMdx.internal.mediaType'
  | 'childMdx.internal.owner'
  | 'childMdx.internal.type'
  | 'childrenNavYaml'
  | 'childrenNavYaml.id'
  | 'childrenNavYaml.title'
  | 'childrenNavYaml.path'
  | 'childrenNavYaml.icon'
  | 'childrenNavYaml.filterable'
  | 'childrenNavYaml.pages'
  | 'childrenNavYaml.pages.id'
  | 'childrenNavYaml.pages.title'
  | 'childrenNavYaml.pages.path'
  | 'childrenNavYaml.pages.icon'
  | 'childrenNavYaml.pages.filterable'
  | 'childrenNavYaml.pages.pages'
  | 'childrenNavYaml.pages.pages.id'
  | 'childrenNavYaml.pages.pages.title'
  | 'childrenNavYaml.pages.pages.path'
  | 'childrenNavYaml.pages.pages.icon'
  | 'childrenNavYaml.pages.pages.filterable'
  | 'childrenNavYaml.pages.pages.pages'
  | 'childrenNavYaml.pages.pages.rootNav'
  | 'childrenNavYaml.pages.pages.children'
  | 'childrenNavYaml.pages.rootNav'
  | 'childrenNavYaml.pages.parent.id'
  | 'childrenNavYaml.pages.parent.children'
  | 'childrenNavYaml.pages.children'
  | 'childrenNavYaml.pages.children.id'
  | 'childrenNavYaml.pages.children.children'
  | 'childrenNavYaml.pages.internal.content'
  | 'childrenNavYaml.pages.internal.contentDigest'
  | 'childrenNavYaml.pages.internal.description'
  | 'childrenNavYaml.pages.internal.fieldOwners'
  | 'childrenNavYaml.pages.internal.ignoreType'
  | 'childrenNavYaml.pages.internal.mediaType'
  | 'childrenNavYaml.pages.internal.owner'
  | 'childrenNavYaml.pages.internal.type'
  | 'childrenNavYaml.rootNav'
  | 'childrenNavYaml.parent.id'
  | 'childrenNavYaml.parent.parent.id'
  | 'childrenNavYaml.parent.parent.children'
  | 'childrenNavYaml.parent.children'
  | 'childrenNavYaml.parent.children.id'
  | 'childrenNavYaml.parent.children.children'
  | 'childrenNavYaml.parent.internal.content'
  | 'childrenNavYaml.parent.internal.contentDigest'
  | 'childrenNavYaml.parent.internal.description'
  | 'childrenNavYaml.parent.internal.fieldOwners'
  | 'childrenNavYaml.parent.internal.ignoreType'
  | 'childrenNavYaml.parent.internal.mediaType'
  | 'childrenNavYaml.parent.internal.owner'
  | 'childrenNavYaml.parent.internal.type'
  | 'childrenNavYaml.children'
  | 'childrenNavYaml.children.id'
  | 'childrenNavYaml.children.parent.id'
  | 'childrenNavYaml.children.parent.children'
  | 'childrenNavYaml.children.children'
  | 'childrenNavYaml.children.children.id'
  | 'childrenNavYaml.children.children.children'
  | 'childrenNavYaml.children.internal.content'
  | 'childrenNavYaml.children.internal.contentDigest'
  | 'childrenNavYaml.children.internal.description'
  | 'childrenNavYaml.children.internal.fieldOwners'
  | 'childrenNavYaml.children.internal.ignoreType'
  | 'childrenNavYaml.children.internal.mediaType'
  | 'childrenNavYaml.children.internal.owner'
  | 'childrenNavYaml.children.internal.type'
  | 'childrenNavYaml.internal.content'
  | 'childrenNavYaml.internal.contentDigest'
  | 'childrenNavYaml.internal.description'
  | 'childrenNavYaml.internal.fieldOwners'
  | 'childrenNavYaml.internal.ignoreType'
  | 'childrenNavYaml.internal.mediaType'
  | 'childrenNavYaml.internal.owner'
  | 'childrenNavYaml.internal.type'
  | 'childNavYaml.id'
  | 'childNavYaml.title'
  | 'childNavYaml.path'
  | 'childNavYaml.icon'
  | 'childNavYaml.filterable'
  | 'childNavYaml.pages'
  | 'childNavYaml.pages.id'
  | 'childNavYaml.pages.title'
  | 'childNavYaml.pages.path'
  | 'childNavYaml.pages.icon'
  | 'childNavYaml.pages.filterable'
  | 'childNavYaml.pages.pages'
  | 'childNavYaml.pages.pages.id'
  | 'childNavYaml.pages.pages.title'
  | 'childNavYaml.pages.pages.path'
  | 'childNavYaml.pages.pages.icon'
  | 'childNavYaml.pages.pages.filterable'
  | 'childNavYaml.pages.pages.pages'
  | 'childNavYaml.pages.pages.rootNav'
  | 'childNavYaml.pages.pages.children'
  | 'childNavYaml.pages.rootNav'
  | 'childNavYaml.pages.parent.id'
  | 'childNavYaml.pages.parent.children'
  | 'childNavYaml.pages.children'
  | 'childNavYaml.pages.children.id'
  | 'childNavYaml.pages.children.children'
  | 'childNavYaml.pages.internal.content'
  | 'childNavYaml.pages.internal.contentDigest'
  | 'childNavYaml.pages.internal.description'
  | 'childNavYaml.pages.internal.fieldOwners'
  | 'childNavYaml.pages.internal.ignoreType'
  | 'childNavYaml.pages.internal.mediaType'
  | 'childNavYaml.pages.internal.owner'
  | 'childNavYaml.pages.internal.type'
  | 'childNavYaml.rootNav'
  | 'childNavYaml.parent.id'
  | 'childNavYaml.parent.parent.id'
  | 'childNavYaml.parent.parent.children'
  | 'childNavYaml.parent.children'
  | 'childNavYaml.parent.children.id'
  | 'childNavYaml.parent.children.children'
  | 'childNavYaml.parent.internal.content'
  | 'childNavYaml.parent.internal.contentDigest'
  | 'childNavYaml.parent.internal.description'
  | 'childNavYaml.parent.internal.fieldOwners'
  | 'childNavYaml.parent.internal.ignoreType'
  | 'childNavYaml.parent.internal.mediaType'
  | 'childNavYaml.parent.internal.owner'
  | 'childNavYaml.parent.internal.type'
  | 'childNavYaml.children'
  | 'childNavYaml.children.id'
  | 'childNavYaml.children.parent.id'
  | 'childNavYaml.children.parent.children'
  | 'childNavYaml.children.children'
  | 'childNavYaml.children.children.id'
  | 'childNavYaml.children.children.children'
  | 'childNavYaml.children.internal.content'
  | 'childNavYaml.children.internal.contentDigest'
  | 'childNavYaml.children.internal.description'
  | 'childNavYaml.children.internal.fieldOwners'
  | 'childNavYaml.children.internal.ignoreType'
  | 'childNavYaml.children.internal.mediaType'
  | 'childNavYaml.children.internal.owner'
  | 'childNavYaml.children.internal.type'
  | 'childNavYaml.internal.content'
  | 'childNavYaml.internal.contentDigest'
  | 'childNavYaml.internal.description'
  | 'childNavYaml.internal.fieldOwners'
  | 'childNavYaml.internal.ignoreType'
  | 'childNavYaml.internal.mediaType'
  | 'childNavYaml.internal.owner'
  | 'childNavYaml.internal.type'
  | 'childrenTranslatedNavJson'
  | 'childrenTranslatedNavJson.id'
  | 'childrenTranslatedNavJson.parent.id'
  | 'childrenTranslatedNavJson.parent.parent.id'
  | 'childrenTranslatedNavJson.parent.parent.children'
  | 'childrenTranslatedNavJson.parent.children'
  | 'childrenTranslatedNavJson.parent.children.id'
  | 'childrenTranslatedNavJson.parent.children.children'
  | 'childrenTranslatedNavJson.parent.internal.content'
  | 'childrenTranslatedNavJson.parent.internal.contentDigest'
  | 'childrenTranslatedNavJson.parent.internal.description'
  | 'childrenTranslatedNavJson.parent.internal.fieldOwners'
  | 'childrenTranslatedNavJson.parent.internal.ignoreType'
  | 'childrenTranslatedNavJson.parent.internal.mediaType'
  | 'childrenTranslatedNavJson.parent.internal.owner'
  | 'childrenTranslatedNavJson.parent.internal.type'
  | 'childrenTranslatedNavJson.children'
  | 'childrenTranslatedNavJson.children.id'
  | 'childrenTranslatedNavJson.children.parent.id'
  | 'childrenTranslatedNavJson.children.parent.children'
  | 'childrenTranslatedNavJson.children.children'
  | 'childrenTranslatedNavJson.children.children.id'
  | 'childrenTranslatedNavJson.children.children.children'
  | 'childrenTranslatedNavJson.children.internal.content'
  | 'childrenTranslatedNavJson.children.internal.contentDigest'
  | 'childrenTranslatedNavJson.children.internal.description'
  | 'childrenTranslatedNavJson.children.internal.fieldOwners'
  | 'childrenTranslatedNavJson.children.internal.ignoreType'
  | 'childrenTranslatedNavJson.children.internal.mediaType'
  | 'childrenTranslatedNavJson.children.internal.owner'
  | 'childrenTranslatedNavJson.children.internal.type'
  | 'childrenTranslatedNavJson.internal.content'
  | 'childrenTranslatedNavJson.internal.contentDigest'
  | 'childrenTranslatedNavJson.internal.description'
  | 'childrenTranslatedNavJson.internal.fieldOwners'
  | 'childrenTranslatedNavJson.internal.ignoreType'
  | 'childrenTranslatedNavJson.internal.mediaType'
  | 'childrenTranslatedNavJson.internal.owner'
  | 'childrenTranslatedNavJson.internal.type'
  | 'childrenTranslatedNavJson.title'
  | 'childrenTranslatedNavJson.englishTitle'
  | 'childrenTranslatedNavJson.locale'
  | 'childTranslatedNavJson.id'
  | 'childTranslatedNavJson.parent.id'
  | 'childTranslatedNavJson.parent.parent.id'
  | 'childTranslatedNavJson.parent.parent.children'
  | 'childTranslatedNavJson.parent.children'
  | 'childTranslatedNavJson.parent.children.id'
  | 'childTranslatedNavJson.parent.children.children'
  | 'childTranslatedNavJson.parent.internal.content'
  | 'childTranslatedNavJson.parent.internal.contentDigest'
  | 'childTranslatedNavJson.parent.internal.description'
  | 'childTranslatedNavJson.parent.internal.fieldOwners'
  | 'childTranslatedNavJson.parent.internal.ignoreType'
  | 'childTranslatedNavJson.parent.internal.mediaType'
  | 'childTranslatedNavJson.parent.internal.owner'
  | 'childTranslatedNavJson.parent.internal.type'
  | 'childTranslatedNavJson.children'
  | 'childTranslatedNavJson.children.id'
  | 'childTranslatedNavJson.children.parent.id'
  | 'childTranslatedNavJson.children.parent.children'
  | 'childTranslatedNavJson.children.children'
  | 'childTranslatedNavJson.children.children.id'
  | 'childTranslatedNavJson.children.children.children'
  | 'childTranslatedNavJson.children.internal.content'
  | 'childTranslatedNavJson.children.internal.contentDigest'
  | 'childTranslatedNavJson.children.internal.description'
  | 'childTranslatedNavJson.children.internal.fieldOwners'
  | 'childTranslatedNavJson.children.internal.ignoreType'
  | 'childTranslatedNavJson.children.internal.mediaType'
  | 'childTranslatedNavJson.children.internal.owner'
  | 'childTranslatedNavJson.children.internal.type'
  | 'childTranslatedNavJson.internal.content'
  | 'childTranslatedNavJson.internal.contentDigest'
  | 'childTranslatedNavJson.internal.description'
  | 'childTranslatedNavJson.internal.fieldOwners'
  | 'childTranslatedNavJson.internal.ignoreType'
  | 'childTranslatedNavJson.internal.mediaType'
  | 'childTranslatedNavJson.internal.owner'
  | 'childTranslatedNavJson.internal.type'
  | 'childTranslatedNavJson.title'
  | 'childTranslatedNavJson.englishTitle'
  | 'childTranslatedNavJson.locale'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type FileGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<FileGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type FileGroupConnection_distinctArgs = {
  field: FileFieldsEnum;
};


type FileGroupConnection_maxArgs = {
  field: FileFieldsEnum;
};


type FileGroupConnection_minArgs = {
  field: FileFieldsEnum;
};


type FileGroupConnection_sumArgs = {
  field: FileFieldsEnum;
};


type FileGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

type FileFilterInput = {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly blksize: Maybe<IntQueryOperatorInput>;
  readonly blocks: Maybe<IntQueryOperatorInput>;
  readonly publicURL: Maybe<StringQueryOperatorInput>;
  readonly childrenImageSharp: Maybe<ImageSharpFilterListInput>;
  readonly childImageSharp: Maybe<ImageSharpFilterInput>;
  readonly childrenMarkdownRemark: Maybe<MarkdownRemarkFilterListInput>;
  readonly childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
  readonly childrenMdx: Maybe<MdxFilterListInput>;
  readonly childMdx: Maybe<MdxFilterInput>;
  readonly childrenNavYaml: Maybe<NavYamlFilterListInput>;
  readonly childNavYaml: Maybe<NavYamlFilterInput>;
  readonly childrenTranslatedNavJson: Maybe<TranslatedNavJsonFilterListInput>;
  readonly childTranslatedNavJson: Maybe<TranslatedNavJsonFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type FileSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<FileFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SortOrderEnum =
  | 'ASC'
  | 'DESC';

type DirectoryConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
};


type DirectoryConnection_distinctArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_maxArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_minArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_sumArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

type DirectoryEdge = {
  readonly next: Maybe<Directory>;
  readonly node: Directory;
  readonly previous: Maybe<Directory>;
};

type DirectoryFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type DirectoryGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type DirectoryGroupConnection_distinctArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryGroupConnection_maxArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryGroupConnection_minArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryGroupConnection_sumArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

type DirectoryFilterInput = {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type DirectorySortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<DirectoryFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteSiteMetadataFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly repository: Maybe<StringQueryOperatorInput>;
  readonly branch: Maybe<StringQueryOperatorInput>;
  readonly contributingUrl: Maybe<StringQueryOperatorInput>;
  readonly titleTemplate: Maybe<StringQueryOperatorInput>;
  readonly author: Maybe<StringQueryOperatorInput>;
  readonly siteUrl: Maybe<StringQueryOperatorInput>;
};

type SiteFlagsFilterInput = {
  readonly DEV_SSR: Maybe<BooleanQueryOperatorInput>;
  readonly PRESERVE_FILE_DOWNLOAD_CACHE: Maybe<BooleanQueryOperatorInput>;
};

type SiteConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
};


type SiteConnection_distinctArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_maxArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_minArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_sumArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

type SiteEdge = {
  readonly next: Maybe<Site>;
  readonly node: Site;
  readonly previous: Maybe<Site>;
};

type SiteFieldsEnum =
  | 'buildTime'
  | 'siteMetadata.title'
  | 'siteMetadata.description'
  | 'siteMetadata.repository'
  | 'siteMetadata.branch'
  | 'siteMetadata.contributingUrl'
  | 'siteMetadata.titleTemplate'
  | 'siteMetadata.author'
  | 'siteMetadata.siteUrl'
  | 'port'
  | 'host'
  | 'flags.DEV_SSR'
  | 'flags.PRESERVE_FILE_DOWNLOAD_CACHE'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SiteGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type SiteGroupConnection_distinctArgs = {
  field: SiteFieldsEnum;
};


type SiteGroupConnection_maxArgs = {
  field: SiteFieldsEnum;
};


type SiteGroupConnection_minArgs = {
  field: SiteFieldsEnum;
};


type SiteGroupConnection_sumArgs = {
  field: SiteFieldsEnum;
};


type SiteGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

type SiteFilterInput = {
  readonly buildTime: Maybe<DateQueryOperatorInput>;
  readonly siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  readonly port: Maybe<IntQueryOperatorInput>;
  readonly host: Maybe<StringQueryOperatorInput>;
  readonly flags: Maybe<SiteFlagsFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteFunctionConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteFunctionGroupConnection>;
};


type SiteFunctionConnection_distinctArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_maxArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_minArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_sumArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

type SiteFunctionEdge = {
  readonly next: Maybe<SiteFunction>;
  readonly node: SiteFunction;
  readonly previous: Maybe<SiteFunction>;
};

type SiteFunctionFieldsEnum =
  | 'functionRoute'
  | 'pluginName'
  | 'originalAbsoluteFilePath'
  | 'originalRelativeFilePath'
  | 'relativeCompiledFilePath'
  | 'absoluteCompiledFilePath'
  | 'matchPath'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SiteFunctionGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteFunctionGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type SiteFunctionGroupConnection_distinctArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionGroupConnection_maxArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionGroupConnection_minArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionGroupConnection_sumArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

type SiteFunctionFilterInput = {
  readonly functionRoute: Maybe<StringQueryOperatorInput>;
  readonly pluginName: Maybe<StringQueryOperatorInput>;
  readonly originalAbsoluteFilePath: Maybe<StringQueryOperatorInput>;
  readonly originalRelativeFilePath: Maybe<StringQueryOperatorInput>;
  readonly relativeCompiledFilePath: Maybe<StringQueryOperatorInput>;
  readonly absoluteCompiledFilePath: Maybe<StringQueryOperatorInput>;
  readonly matchPath: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteFunctionSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteFunctionFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SitePluginFilterInput = {
  readonly resolve: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly nodeAPIs: Maybe<StringQueryOperatorInput>;
  readonly browserAPIs: Maybe<StringQueryOperatorInput>;
  readonly ssrAPIs: Maybe<StringQueryOperatorInput>;
  readonly pluginFilepath: Maybe<StringQueryOperatorInput>;
  readonly pluginOptions: Maybe<JSONQueryOperatorInput>;
  readonly packageJson: Maybe<JSONQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SitePageConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
};


type SitePageConnection_distinctArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_maxArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_minArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_sumArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

type SitePageEdge = {
  readonly next: Maybe<SitePage>;
  readonly node: SitePage;
  readonly previous: Maybe<SitePage>;
};

type SitePageFieldsEnum =
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'pageContext'
  | 'pluginCreator.resolve'
  | 'pluginCreator.name'
  | 'pluginCreator.version'
  | 'pluginCreator.nodeAPIs'
  | 'pluginCreator.browserAPIs'
  | 'pluginCreator.ssrAPIs'
  | 'pluginCreator.pluginFilepath'
  | 'pluginCreator.pluginOptions'
  | 'pluginCreator.packageJson'
  | 'pluginCreator.id'
  | 'pluginCreator.parent.id'
  | 'pluginCreator.parent.parent.id'
  | 'pluginCreator.parent.parent.children'
  | 'pluginCreator.parent.children'
  | 'pluginCreator.parent.children.id'
  | 'pluginCreator.parent.children.children'
  | 'pluginCreator.parent.internal.content'
  | 'pluginCreator.parent.internal.contentDigest'
  | 'pluginCreator.parent.internal.description'
  | 'pluginCreator.parent.internal.fieldOwners'
  | 'pluginCreator.parent.internal.ignoreType'
  | 'pluginCreator.parent.internal.mediaType'
  | 'pluginCreator.parent.internal.owner'
  | 'pluginCreator.parent.internal.type'
  | 'pluginCreator.children'
  | 'pluginCreator.children.id'
  | 'pluginCreator.children.parent.id'
  | 'pluginCreator.children.parent.children'
  | 'pluginCreator.children.children'
  | 'pluginCreator.children.children.id'
  | 'pluginCreator.children.children.children'
  | 'pluginCreator.children.internal.content'
  | 'pluginCreator.children.internal.contentDigest'
  | 'pluginCreator.children.internal.description'
  | 'pluginCreator.children.internal.fieldOwners'
  | 'pluginCreator.children.internal.ignoreType'
  | 'pluginCreator.children.internal.mediaType'
  | 'pluginCreator.children.internal.owner'
  | 'pluginCreator.children.internal.type'
  | 'pluginCreator.internal.content'
  | 'pluginCreator.internal.contentDigest'
  | 'pluginCreator.internal.description'
  | 'pluginCreator.internal.fieldOwners'
  | 'pluginCreator.internal.ignoreType'
  | 'pluginCreator.internal.mediaType'
  | 'pluginCreator.internal.owner'
  | 'pluginCreator.internal.type'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SitePageGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type SitePageGroupConnection_distinctArgs = {
  field: SitePageFieldsEnum;
};


type SitePageGroupConnection_maxArgs = {
  field: SitePageFieldsEnum;
};


type SitePageGroupConnection_minArgs = {
  field: SitePageFieldsEnum;
};


type SitePageGroupConnection_sumArgs = {
  field: SitePageFieldsEnum;
};


type SitePageGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

type SitePageFilterInput = {
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly component: Maybe<StringQueryOperatorInput>;
  readonly internalComponentName: Maybe<StringQueryOperatorInput>;
  readonly componentChunkName: Maybe<StringQueryOperatorInput>;
  readonly matchPath: Maybe<StringQueryOperatorInput>;
  readonly pageContext: Maybe<JSONQueryOperatorInput>;
  readonly pluginCreator: Maybe<SitePluginFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SitePageSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePageFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SitePluginConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
};


type SitePluginConnection_distinctArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_maxArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_minArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_sumArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

type SitePluginEdge = {
  readonly next: Maybe<SitePlugin>;
  readonly node: SitePlugin;
  readonly previous: Maybe<SitePlugin>;
};

type SitePluginFieldsEnum =
  | 'resolve'
  | 'name'
  | 'version'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'pluginOptions'
  | 'packageJson'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SitePluginGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type SitePluginGroupConnection_distinctArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginGroupConnection_maxArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginGroupConnection_minArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginGroupConnection_sumArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

type SitePluginSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePluginFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteBuildMetadataConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
};


type SiteBuildMetadataConnection_distinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_maxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_minArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_sumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

type SiteBuildMetadataEdge = {
  readonly next: Maybe<SiteBuildMetadata>;
  readonly node: SiteBuildMetadata;
  readonly previous: Maybe<SiteBuildMetadata>;
};

type SiteBuildMetadataFieldsEnum =
  | 'buildTime'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SiteBuildMetadataGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type SiteBuildMetadataGroupConnection_distinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataGroupConnection_maxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataGroupConnection_minArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataGroupConnection_sumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

type SiteBuildMetadataFilterInput = {
  readonly buildTime: Maybe<DateQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteBuildMetadataSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteBuildMetadataFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ImageSharpConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ImageSharpGroupConnection>;
};


type ImageSharpConnection_distinctArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_maxArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_minArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_sumArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

type ImageSharpEdge = {
  readonly next: Maybe<ImageSharp>;
  readonly node: ImageSharp;
  readonly previous: Maybe<ImageSharp>;
};

type ImageSharpFieldsEnum =
  | 'fixed.base64'
  | 'fixed.tracedSVG'
  | 'fixed.aspectRatio'
  | 'fixed.width'
  | 'fixed.height'
  | 'fixed.src'
  | 'fixed.srcSet'
  | 'fixed.srcWebp'
  | 'fixed.srcSetWebp'
  | 'fixed.originalName'
  | 'fluid.base64'
  | 'fluid.tracedSVG'
  | 'fluid.aspectRatio'
  | 'fluid.src'
  | 'fluid.srcSet'
  | 'fluid.srcWebp'
  | 'fluid.srcSetWebp'
  | 'fluid.sizes'
  | 'fluid.originalImg'
  | 'fluid.originalName'
  | 'fluid.presentationWidth'
  | 'fluid.presentationHeight'
  | 'gatsbyImageData'
  | 'original.width'
  | 'original.height'
  | 'original.src'
  | 'resize.src'
  | 'resize.tracedSVG'
  | 'resize.width'
  | 'resize.height'
  | 'resize.aspectRatio'
  | 'resize.originalName'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ImageSharpGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ImageSharpGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type ImageSharpGroupConnection_distinctArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpGroupConnection_maxArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpGroupConnection_minArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpGroupConnection_sumArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

type ImageSharpSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ImageSharpFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type LocaleConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<LocaleEdge>;
  readonly nodes: ReadonlyArray<Locale>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<LocaleGroupConnection>;
};


type LocaleConnection_distinctArgs = {
  field: LocaleFieldsEnum;
};


type LocaleConnection_maxArgs = {
  field: LocaleFieldsEnum;
};


type LocaleConnection_minArgs = {
  field: LocaleFieldsEnum;
};


type LocaleConnection_sumArgs = {
  field: LocaleFieldsEnum;
};


type LocaleConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: LocaleFieldsEnum;
};

type LocaleEdge = {
  readonly next: Maybe<Locale>;
  readonly node: Locale;
  readonly previous: Maybe<Locale>;
};

type LocaleFieldsEnum =
  | 'name'
  | 'localName'
  | 'locale'
  | 'hrefLang'
  | 'isDefault'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type LocaleGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<LocaleEdge>;
  readonly nodes: ReadonlyArray<Locale>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<LocaleGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type LocaleGroupConnection_distinctArgs = {
  field: LocaleFieldsEnum;
};


type LocaleGroupConnection_maxArgs = {
  field: LocaleFieldsEnum;
};


type LocaleGroupConnection_minArgs = {
  field: LocaleFieldsEnum;
};


type LocaleGroupConnection_sumArgs = {
  field: LocaleFieldsEnum;
};


type LocaleGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: LocaleFieldsEnum;
};

type LocaleFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly localName: Maybe<StringQueryOperatorInput>;
  readonly locale: Maybe<StringQueryOperatorInput>;
  readonly hrefLang: Maybe<StringQueryOperatorInput>;
  readonly isDefault: Maybe<BooleanQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type LocaleSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<LocaleFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type RelatedResourceConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<RelatedResourceEdge>;
  readonly nodes: ReadonlyArray<RelatedResource>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<RelatedResourceGroupConnection>;
};


type RelatedResourceConnection_distinctArgs = {
  field: RelatedResourceFieldsEnum;
};


type RelatedResourceConnection_maxArgs = {
  field: RelatedResourceFieldsEnum;
};


type RelatedResourceConnection_minArgs = {
  field: RelatedResourceFieldsEnum;
};


type RelatedResourceConnection_sumArgs = {
  field: RelatedResourceFieldsEnum;
};


type RelatedResourceConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: RelatedResourceFieldsEnum;
};

type RelatedResourceEdge = {
  readonly next: Maybe<RelatedResource>;
  readonly node: RelatedResource;
  readonly previous: Maybe<RelatedResource>;
};

type RelatedResourceFieldsEnum =
  | 'id'
  | 'title'
  | 'url'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type RelatedResourceGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<RelatedResourceEdge>;
  readonly nodes: ReadonlyArray<RelatedResource>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<RelatedResourceGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type RelatedResourceGroupConnection_distinctArgs = {
  field: RelatedResourceFieldsEnum;
};


type RelatedResourceGroupConnection_maxArgs = {
  field: RelatedResourceFieldsEnum;
};


type RelatedResourceGroupConnection_minArgs = {
  field: RelatedResourceFieldsEnum;
};


type RelatedResourceGroupConnection_sumArgs = {
  field: RelatedResourceFieldsEnum;
};


type RelatedResourceGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: RelatedResourceFieldsEnum;
};

type RelatedResourceFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type RelatedResourceSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<RelatedResourceFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type NewRelicThemeRelatedResourceConfigFilterInput = {
  readonly labels: Maybe<RelatedResourceLabelFilterListInput>;
};

type RelatedResourceLabelFilterListInput = {
  readonly elemMatch: Maybe<RelatedResourceLabelFilterInput>;
};

type RelatedResourceLabelFilterInput = {
  readonly baseUrl: Maybe<StringQueryOperatorInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
};

type NewRelicThemeTessenConfigFilterInput = {
  readonly product: Maybe<StringQueryOperatorInput>;
  readonly subproduct: Maybe<StringQueryOperatorInput>;
};

type NewRelicThemeConfigConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<NewRelicThemeConfigEdge>;
  readonly nodes: ReadonlyArray<NewRelicThemeConfig>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<NewRelicThemeConfigGroupConnection>;
};


type NewRelicThemeConfigConnection_distinctArgs = {
  field: NewRelicThemeConfigFieldsEnum;
};


type NewRelicThemeConfigConnection_maxArgs = {
  field: NewRelicThemeConfigFieldsEnum;
};


type NewRelicThemeConfigConnection_minArgs = {
  field: NewRelicThemeConfigFieldsEnum;
};


type NewRelicThemeConfigConnection_sumArgs = {
  field: NewRelicThemeConfigFieldsEnum;
};


type NewRelicThemeConfigConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: NewRelicThemeConfigFieldsEnum;
};

type NewRelicThemeConfigEdge = {
  readonly next: Maybe<NewRelicThemeConfig>;
  readonly node: NewRelicThemeConfig;
  readonly previous: Maybe<NewRelicThemeConfig>;
};

type NewRelicThemeConfigFieldsEnum =
  | 'env'
  | 'relatedResources.labels'
  | 'relatedResources.labels.baseUrl'
  | 'relatedResources.labels.label'
  | 'tessen.product'
  | 'tessen.subproduct'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type NewRelicThemeConfigGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<NewRelicThemeConfigEdge>;
  readonly nodes: ReadonlyArray<NewRelicThemeConfig>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<NewRelicThemeConfigGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type NewRelicThemeConfigGroupConnection_distinctArgs = {
  field: NewRelicThemeConfigFieldsEnum;
};


type NewRelicThemeConfigGroupConnection_maxArgs = {
  field: NewRelicThemeConfigFieldsEnum;
};


type NewRelicThemeConfigGroupConnection_minArgs = {
  field: NewRelicThemeConfigFieldsEnum;
};


type NewRelicThemeConfigGroupConnection_sumArgs = {
  field: NewRelicThemeConfigFieldsEnum;
};


type NewRelicThemeConfigGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: NewRelicThemeConfigFieldsEnum;
};

type NewRelicThemeConfigFilterInput = {
  readonly env: Maybe<StringQueryOperatorInput>;
  readonly relatedResources: Maybe<NewRelicThemeRelatedResourceConfigFilterInput>;
  readonly tessen: Maybe<NewRelicThemeTessenConfigFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type NewRelicThemeConfigSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<NewRelicThemeConfigFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type MarkdownRemarkConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<MarkdownRemarkEdge>;
  readonly nodes: ReadonlyArray<MarkdownRemark>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<MarkdownRemarkGroupConnection>;
};


type MarkdownRemarkConnection_distinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkConnection_maxArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkConnection_minArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkConnection_sumArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: MarkdownRemarkFieldsEnum;
};

type MarkdownRemarkEdge = {
  readonly next: Maybe<MarkdownRemark>;
  readonly node: MarkdownRemark;
  readonly previous: Maybe<MarkdownRemark>;
};

type MarkdownRemarkFieldsEnum =
  | 'id'
  | 'frontmatter.isFeatured'
  | 'frontmatter.translationType'
  | 'frontmatter.title'
  | 'frontmatter.subject'
  | 'frontmatter.releaseDate'
  | 'frontmatter.version'
  | 'frontmatter.downloadLink'
  | 'frontmatter.redirects'
  | 'frontmatter.tags'
  | 'frontmatter.metaDescription'
  | 'frontmatter.type'
  | 'frontmatter.translate'
  | 'frontmatter.shortDescription'
  | 'frontmatter.template'
  | 'frontmatter.topics'
  | 'frontmatter.contentType'
  | 'frontmatter.s_Google_Cloud_Spanner_integration'
  | 'frontmatter.description'
  | 'frontmatter.s_legacy_SNMP_integration'
  | 'frontmatter.startDate'
  | 'frontmatter.endDate'
  | 'frontmatter.name'
  | 'frontmatter.events'
  | 'frontmatter.units'
  | 'frontmatter.summary'
  | 'frontmatter.learnMoreLink'
  | 'frontmatter.dataSources'
  | 'frontmatter.getStartedLink'
  | 'excerpt'
  | 'rawMarkdownBody'
  | 'fileAbsolutePath'
  | 'fields.fileRelativePath'
  | 'fields.slug'
  | 'html'
  | 'htmlAst'
  | 'excerptAst'
  | 'headings'
  | 'headings.id'
  | 'headings.value'
  | 'headings.depth'
  | 'timeToRead'
  | 'tableOfContents'
  | 'wordCount.paragraphs'
  | 'wordCount.sentences'
  | 'wordCount.words'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type MarkdownRemarkGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<MarkdownRemarkEdge>;
  readonly nodes: ReadonlyArray<MarkdownRemark>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<MarkdownRemarkGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type MarkdownRemarkGroupConnection_distinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkGroupConnection_maxArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkGroupConnection_minArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkGroupConnection_sumArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: MarkdownRemarkFieldsEnum;
};

type MarkdownRemarkSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<MarkdownRemarkFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type MdxConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<MdxEdge>;
  readonly nodes: ReadonlyArray<Mdx>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<MdxGroupConnection>;
};


type MdxConnection_distinctArgs = {
  field: MdxFieldsEnum;
};


type MdxConnection_maxArgs = {
  field: MdxFieldsEnum;
};


type MdxConnection_minArgs = {
  field: MdxFieldsEnum;
};


type MdxConnection_sumArgs = {
  field: MdxFieldsEnum;
};


type MdxConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: MdxFieldsEnum;
};

type MdxEdge = {
  readonly next: Maybe<Mdx>;
  readonly node: Mdx;
  readonly previous: Maybe<Mdx>;
};

type MdxFieldsEnum =
  | 'rawBody'
  | 'fileAbsolutePath'
  | 'frontmatter.isFeatured'
  | 'frontmatter.translationType'
  | 'frontmatter.title'
  | 'frontmatter.subject'
  | 'frontmatter.releaseDate'
  | 'frontmatter.version'
  | 'frontmatter.downloadLink'
  | 'frontmatter.redirects'
  | 'frontmatter.tags'
  | 'frontmatter.metaDescription'
  | 'frontmatter.type'
  | 'frontmatter.translate'
  | 'frontmatter.shortDescription'
  | 'frontmatter.template'
  | 'frontmatter.topics'
  | 'frontmatter.contentType'
  | 'frontmatter.s_Google_Cloud_Spanner_integration'
  | 'frontmatter.description'
  | 'frontmatter.s_legacy_SNMP_integration'
  | 'frontmatter.startDate'
  | 'frontmatter.endDate'
  | 'frontmatter.name'
  | 'frontmatter.events'
  | 'frontmatter.units'
  | 'frontmatter.summary'
  | 'frontmatter.learnMoreLink'
  | 'frontmatter.dataSources'
  | 'frontmatter.getStartedLink'
  | 'slug'
  | 'body'
  | 'excerpt'
  | 'headings'
  | 'headings.value'
  | 'headings.depth'
  | 'html'
  | 'mdxAST'
  | 'tableOfContents'
  | 'timeToRead'
  | 'wordCount.paragraphs'
  | 'wordCount.sentences'
  | 'wordCount.words'
  | 'fields.fileRelativePath'
  | 'fields.slug'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type MdxGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<MdxEdge>;
  readonly nodes: ReadonlyArray<Mdx>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<MdxGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type MdxGroupConnection_distinctArgs = {
  field: MdxFieldsEnum;
};


type MdxGroupConnection_maxArgs = {
  field: MdxFieldsEnum;
};


type MdxGroupConnection_minArgs = {
  field: MdxFieldsEnum;
};


type MdxGroupConnection_sumArgs = {
  field: MdxFieldsEnum;
};


type MdxGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: MdxFieldsEnum;
};

type MdxSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<MdxFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type DataDictionaryAttributeFilterListInput = {
  readonly elemMatch: Maybe<DataDictionaryAttributeFilterInput>;
};

type DataDictionaryAttributeFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly definition: Maybe<MarkdownRemarkFilterInput>;
  readonly events: Maybe<DataDictionaryEventFilterListInput>;
  readonly units: Maybe<StringQueryOperatorInput>;
  readonly fileRelativePath: Maybe<StringQueryOperatorInput>;
  readonly plugin: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type DataDictionaryEventFilterListInput = {
  readonly elemMatch: Maybe<DataDictionaryEventFilterInput>;
};

type DataDictionaryEventFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly definition: Maybe<MarkdownRemarkFilterInput>;
  readonly dataSources: Maybe<StringQueryOperatorInput>;
  readonly fileRelativePath: Maybe<StringQueryOperatorInput>;
  readonly plugin: Maybe<StringQueryOperatorInput>;
  readonly childrenDataDictionaryAttribute: Maybe<DataDictionaryAttributeFilterListInput>;
  readonly childDataDictionaryAttribute: Maybe<DataDictionaryAttributeFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type DataDictionaryEventConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DataDictionaryEventEdge>;
  readonly nodes: ReadonlyArray<DataDictionaryEvent>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<DataDictionaryEventGroupConnection>;
};


type DataDictionaryEventConnection_distinctArgs = {
  field: DataDictionaryEventFieldsEnum;
};


type DataDictionaryEventConnection_maxArgs = {
  field: DataDictionaryEventFieldsEnum;
};


type DataDictionaryEventConnection_minArgs = {
  field: DataDictionaryEventFieldsEnum;
};


type DataDictionaryEventConnection_sumArgs = {
  field: DataDictionaryEventFieldsEnum;
};


type DataDictionaryEventConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DataDictionaryEventFieldsEnum;
};

type DataDictionaryEventEdge = {
  readonly next: Maybe<DataDictionaryEvent>;
  readonly node: DataDictionaryEvent;
  readonly previous: Maybe<DataDictionaryEvent>;
};

type DataDictionaryEventFieldsEnum =
  | 'name'
  | 'definition.id'
  | 'definition.frontmatter.isFeatured'
  | 'definition.frontmatter.translationType'
  | 'definition.frontmatter.title'
  | 'definition.frontmatter.subject'
  | 'definition.frontmatter.releaseDate'
  | 'definition.frontmatter.version'
  | 'definition.frontmatter.downloadLink'
  | 'definition.frontmatter.redirects'
  | 'definition.frontmatter.tags'
  | 'definition.frontmatter.metaDescription'
  | 'definition.frontmatter.type'
  | 'definition.frontmatter.translate'
  | 'definition.frontmatter.shortDescription'
  | 'definition.frontmatter.template'
  | 'definition.frontmatter.topics'
  | 'definition.frontmatter.contentType'
  | 'definition.frontmatter.s_Google_Cloud_Spanner_integration'
  | 'definition.frontmatter.description'
  | 'definition.frontmatter.s_legacy_SNMP_integration'
  | 'definition.frontmatter.startDate'
  | 'definition.frontmatter.endDate'
  | 'definition.frontmatter.name'
  | 'definition.frontmatter.events'
  | 'definition.frontmatter.units'
  | 'definition.frontmatter.summary'
  | 'definition.frontmatter.learnMoreLink'
  | 'definition.frontmatter.dataSources'
  | 'definition.frontmatter.getStartedLink'
  | 'definition.excerpt'
  | 'definition.rawMarkdownBody'
  | 'definition.fileAbsolutePath'
  | 'definition.fields.fileRelativePath'
  | 'definition.fields.slug'
  | 'definition.html'
  | 'definition.htmlAst'
  | 'definition.excerptAst'
  | 'definition.headings'
  | 'definition.headings.id'
  | 'definition.headings.value'
  | 'definition.headings.depth'
  | 'definition.timeToRead'
  | 'definition.tableOfContents'
  | 'definition.wordCount.paragraphs'
  | 'definition.wordCount.sentences'
  | 'definition.wordCount.words'
  | 'definition.parent.id'
  | 'definition.parent.parent.id'
  | 'definition.parent.parent.children'
  | 'definition.parent.children'
  | 'definition.parent.children.id'
  | 'definition.parent.children.children'
  | 'definition.parent.internal.content'
  | 'definition.parent.internal.contentDigest'
  | 'definition.parent.internal.description'
  | 'definition.parent.internal.fieldOwners'
  | 'definition.parent.internal.ignoreType'
  | 'definition.parent.internal.mediaType'
  | 'definition.parent.internal.owner'
  | 'definition.parent.internal.type'
  | 'definition.children'
  | 'definition.children.id'
  | 'definition.children.parent.id'
  | 'definition.children.parent.children'
  | 'definition.children.children'
  | 'definition.children.children.id'
  | 'definition.children.children.children'
  | 'definition.children.internal.content'
  | 'definition.children.internal.contentDigest'
  | 'definition.children.internal.description'
  | 'definition.children.internal.fieldOwners'
  | 'definition.children.internal.ignoreType'
  | 'definition.children.internal.mediaType'
  | 'definition.children.internal.owner'
  | 'definition.children.internal.type'
  | 'definition.internal.content'
  | 'definition.internal.contentDigest'
  | 'definition.internal.description'
  | 'definition.internal.fieldOwners'
  | 'definition.internal.ignoreType'
  | 'definition.internal.mediaType'
  | 'definition.internal.owner'
  | 'definition.internal.type'
  | 'dataSources'
  | 'fileRelativePath'
  | 'plugin'
  | 'childrenDataDictionaryAttribute'
  | 'childrenDataDictionaryAttribute.name'
  | 'childrenDataDictionaryAttribute.definition.id'
  | 'childrenDataDictionaryAttribute.definition.frontmatter.isFeatured'
  | 'childrenDataDictionaryAttribute.definition.frontmatter.translationType'
  | 'childrenDataDictionaryAttribute.definition.frontmatter.title'
  | 'childrenDataDictionaryAttribute.definition.frontmatter.subject'
  | 'childrenDataDictionaryAttribute.definition.frontmatter.releaseDate'
  | 'childrenDataDictionaryAttribute.definition.frontmatter.version'
  | 'childrenDataDictionaryAttribute.definition.frontmatter.downloadLink'
  | 'childrenDataDictionaryAttribute.definition.frontmatter.redirects'
  | 'childrenDataDictionaryAttribute.definition.frontmatter.tags'
  | 'childrenDataDictionaryAttribute.definition.frontmatter.metaDescription'
  | 'childrenDataDictionaryAttribute.definition.frontmatter.type'
  | 'childrenDataDictionaryAttribute.definition.frontmatter.translate'
  | 'childrenDataDictionaryAttribute.definition.frontmatter.shortDescription'
  | 'childrenDataDictionaryAttribute.definition.frontmatter.template'
  | 'childrenDataDictionaryAttribute.definition.frontmatter.topics'
  | 'childrenDataDictionaryAttribute.definition.frontmatter.contentType'
  | 'childrenDataDictionaryAttribute.definition.frontmatter.s_Google_Cloud_Spanner_integration'
  | 'childrenDataDictionaryAttribute.definition.frontmatter.description'
  | 'childrenDataDictionaryAttribute.definition.frontmatter.s_legacy_SNMP_integration'
  | 'childrenDataDictionaryAttribute.definition.frontmatter.startDate'
  | 'childrenDataDictionaryAttribute.definition.frontmatter.endDate'
  | 'childrenDataDictionaryAttribute.definition.frontmatter.name'
  | 'childrenDataDictionaryAttribute.definition.frontmatter.events'
  | 'childrenDataDictionaryAttribute.definition.frontmatter.units'
  | 'childrenDataDictionaryAttribute.definition.frontmatter.summary'
  | 'childrenDataDictionaryAttribute.definition.frontmatter.learnMoreLink'
  | 'childrenDataDictionaryAttribute.definition.frontmatter.dataSources'
  | 'childrenDataDictionaryAttribute.definition.frontmatter.getStartedLink'
  | 'childrenDataDictionaryAttribute.definition.excerpt'
  | 'childrenDataDictionaryAttribute.definition.rawMarkdownBody'
  | 'childrenDataDictionaryAttribute.definition.fileAbsolutePath'
  | 'childrenDataDictionaryAttribute.definition.fields.fileRelativePath'
  | 'childrenDataDictionaryAttribute.definition.fields.slug'
  | 'childrenDataDictionaryAttribute.definition.html'
  | 'childrenDataDictionaryAttribute.definition.htmlAst'
  | 'childrenDataDictionaryAttribute.definition.excerptAst'
  | 'childrenDataDictionaryAttribute.definition.headings'
  | 'childrenDataDictionaryAttribute.definition.headings.id'
  | 'childrenDataDictionaryAttribute.definition.headings.value'
  | 'childrenDataDictionaryAttribute.definition.headings.depth'
  | 'childrenDataDictionaryAttribute.definition.timeToRead'
  | 'childrenDataDictionaryAttribute.definition.tableOfContents'
  | 'childrenDataDictionaryAttribute.definition.wordCount.paragraphs'
  | 'childrenDataDictionaryAttribute.definition.wordCount.sentences'
  | 'childrenDataDictionaryAttribute.definition.wordCount.words'
  | 'childrenDataDictionaryAttribute.definition.parent.id'
  | 'childrenDataDictionaryAttribute.definition.parent.children'
  | 'childrenDataDictionaryAttribute.definition.children'
  | 'childrenDataDictionaryAttribute.definition.children.id'
  | 'childrenDataDictionaryAttribute.definition.children.children'
  | 'childrenDataDictionaryAttribute.definition.internal.content'
  | 'childrenDataDictionaryAttribute.definition.internal.contentDigest'
  | 'childrenDataDictionaryAttribute.definition.internal.description'
  | 'childrenDataDictionaryAttribute.definition.internal.fieldOwners'
  | 'childrenDataDictionaryAttribute.definition.internal.ignoreType'
  | 'childrenDataDictionaryAttribute.definition.internal.mediaType'
  | 'childrenDataDictionaryAttribute.definition.internal.owner'
  | 'childrenDataDictionaryAttribute.definition.internal.type'
  | 'childrenDataDictionaryAttribute.events'
  | 'childrenDataDictionaryAttribute.events.name'
  | 'childrenDataDictionaryAttribute.events.definition.id'
  | 'childrenDataDictionaryAttribute.events.definition.excerpt'
  | 'childrenDataDictionaryAttribute.events.definition.rawMarkdownBody'
  | 'childrenDataDictionaryAttribute.events.definition.fileAbsolutePath'
  | 'childrenDataDictionaryAttribute.events.definition.html'
  | 'childrenDataDictionaryAttribute.events.definition.htmlAst'
  | 'childrenDataDictionaryAttribute.events.definition.excerptAst'
  | 'childrenDataDictionaryAttribute.events.definition.headings'
  | 'childrenDataDictionaryAttribute.events.definition.timeToRead'
  | 'childrenDataDictionaryAttribute.events.definition.tableOfContents'
  | 'childrenDataDictionaryAttribute.events.definition.children'
  | 'childrenDataDictionaryAttribute.events.dataSources'
  | 'childrenDataDictionaryAttribute.events.fileRelativePath'
  | 'childrenDataDictionaryAttribute.events.plugin'
  | 'childrenDataDictionaryAttribute.events.childrenDataDictionaryAttribute'
  | 'childrenDataDictionaryAttribute.events.childrenDataDictionaryAttribute.name'
  | 'childrenDataDictionaryAttribute.events.childrenDataDictionaryAttribute.events'
  | 'childrenDataDictionaryAttribute.events.childrenDataDictionaryAttribute.units'
  | 'childrenDataDictionaryAttribute.events.childrenDataDictionaryAttribute.fileRelativePath'
  | 'childrenDataDictionaryAttribute.events.childrenDataDictionaryAttribute.plugin'
  | 'childrenDataDictionaryAttribute.events.childrenDataDictionaryAttribute.id'
  | 'childrenDataDictionaryAttribute.events.childrenDataDictionaryAttribute.children'
  | 'childrenDataDictionaryAttribute.events.childDataDictionaryAttribute.name'
  | 'childrenDataDictionaryAttribute.events.childDataDictionaryAttribute.events'
  | 'childrenDataDictionaryAttribute.events.childDataDictionaryAttribute.units'
  | 'childrenDataDictionaryAttribute.events.childDataDictionaryAttribute.fileRelativePath'
  | 'childrenDataDictionaryAttribute.events.childDataDictionaryAttribute.plugin'
  | 'childrenDataDictionaryAttribute.events.childDataDictionaryAttribute.id'
  | 'childrenDataDictionaryAttribute.events.childDataDictionaryAttribute.children'
  | 'childrenDataDictionaryAttribute.events.id'
  | 'childrenDataDictionaryAttribute.events.parent.id'
  | 'childrenDataDictionaryAttribute.events.parent.children'
  | 'childrenDataDictionaryAttribute.events.children'
  | 'childrenDataDictionaryAttribute.events.children.id'
  | 'childrenDataDictionaryAttribute.events.children.children'
  | 'childrenDataDictionaryAttribute.events.internal.content'
  | 'childrenDataDictionaryAttribute.events.internal.contentDigest'
  | 'childrenDataDictionaryAttribute.events.internal.description'
  | 'childrenDataDictionaryAttribute.events.internal.fieldOwners'
  | 'childrenDataDictionaryAttribute.events.internal.ignoreType'
  | 'childrenDataDictionaryAttribute.events.internal.mediaType'
  | 'childrenDataDictionaryAttribute.events.internal.owner'
  | 'childrenDataDictionaryAttribute.events.internal.type'
  | 'childrenDataDictionaryAttribute.units'
  | 'childrenDataDictionaryAttribute.fileRelativePath'
  | 'childrenDataDictionaryAttribute.plugin'
  | 'childrenDataDictionaryAttribute.id'
  | 'childrenDataDictionaryAttribute.parent.id'
  | 'childrenDataDictionaryAttribute.parent.parent.id'
  | 'childrenDataDictionaryAttribute.parent.parent.children'
  | 'childrenDataDictionaryAttribute.parent.children'
  | 'childrenDataDictionaryAttribute.parent.children.id'
  | 'childrenDataDictionaryAttribute.parent.children.children'
  | 'childrenDataDictionaryAttribute.parent.internal.content'
  | 'childrenDataDictionaryAttribute.parent.internal.contentDigest'
  | 'childrenDataDictionaryAttribute.parent.internal.description'
  | 'childrenDataDictionaryAttribute.parent.internal.fieldOwners'
  | 'childrenDataDictionaryAttribute.parent.internal.ignoreType'
  | 'childrenDataDictionaryAttribute.parent.internal.mediaType'
  | 'childrenDataDictionaryAttribute.parent.internal.owner'
  | 'childrenDataDictionaryAttribute.parent.internal.type'
  | 'childrenDataDictionaryAttribute.children'
  | 'childrenDataDictionaryAttribute.children.id'
  | 'childrenDataDictionaryAttribute.children.parent.id'
  | 'childrenDataDictionaryAttribute.children.parent.children'
  | 'childrenDataDictionaryAttribute.children.children'
  | 'childrenDataDictionaryAttribute.children.children.id'
  | 'childrenDataDictionaryAttribute.children.children.children'
  | 'childrenDataDictionaryAttribute.children.internal.content'
  | 'childrenDataDictionaryAttribute.children.internal.contentDigest'
  | 'childrenDataDictionaryAttribute.children.internal.description'
  | 'childrenDataDictionaryAttribute.children.internal.fieldOwners'
  | 'childrenDataDictionaryAttribute.children.internal.ignoreType'
  | 'childrenDataDictionaryAttribute.children.internal.mediaType'
  | 'childrenDataDictionaryAttribute.children.internal.owner'
  | 'childrenDataDictionaryAttribute.children.internal.type'
  | 'childrenDataDictionaryAttribute.internal.content'
  | 'childrenDataDictionaryAttribute.internal.contentDigest'
  | 'childrenDataDictionaryAttribute.internal.description'
  | 'childrenDataDictionaryAttribute.internal.fieldOwners'
  | 'childrenDataDictionaryAttribute.internal.ignoreType'
  | 'childrenDataDictionaryAttribute.internal.mediaType'
  | 'childrenDataDictionaryAttribute.internal.owner'
  | 'childrenDataDictionaryAttribute.internal.type'
  | 'childDataDictionaryAttribute.name'
  | 'childDataDictionaryAttribute.definition.id'
  | 'childDataDictionaryAttribute.definition.frontmatter.isFeatured'
  | 'childDataDictionaryAttribute.definition.frontmatter.translationType'
  | 'childDataDictionaryAttribute.definition.frontmatter.title'
  | 'childDataDictionaryAttribute.definition.frontmatter.subject'
  | 'childDataDictionaryAttribute.definition.frontmatter.releaseDate'
  | 'childDataDictionaryAttribute.definition.frontmatter.version'
  | 'childDataDictionaryAttribute.definition.frontmatter.downloadLink'
  | 'childDataDictionaryAttribute.definition.frontmatter.redirects'
  | 'childDataDictionaryAttribute.definition.frontmatter.tags'
  | 'childDataDictionaryAttribute.definition.frontmatter.metaDescription'
  | 'childDataDictionaryAttribute.definition.frontmatter.type'
  | 'childDataDictionaryAttribute.definition.frontmatter.translate'
  | 'childDataDictionaryAttribute.definition.frontmatter.shortDescription'
  | 'childDataDictionaryAttribute.definition.frontmatter.template'
  | 'childDataDictionaryAttribute.definition.frontmatter.topics'
  | 'childDataDictionaryAttribute.definition.frontmatter.contentType'
  | 'childDataDictionaryAttribute.definition.frontmatter.s_Google_Cloud_Spanner_integration'
  | 'childDataDictionaryAttribute.definition.frontmatter.description'
  | 'childDataDictionaryAttribute.definition.frontmatter.s_legacy_SNMP_integration'
  | 'childDataDictionaryAttribute.definition.frontmatter.startDate'
  | 'childDataDictionaryAttribute.definition.frontmatter.endDate'
  | 'childDataDictionaryAttribute.definition.frontmatter.name'
  | 'childDataDictionaryAttribute.definition.frontmatter.events'
  | 'childDataDictionaryAttribute.definition.frontmatter.units'
  | 'childDataDictionaryAttribute.definition.frontmatter.summary'
  | 'childDataDictionaryAttribute.definition.frontmatter.learnMoreLink'
  | 'childDataDictionaryAttribute.definition.frontmatter.dataSources'
  | 'childDataDictionaryAttribute.definition.frontmatter.getStartedLink'
  | 'childDataDictionaryAttribute.definition.excerpt'
  | 'childDataDictionaryAttribute.definition.rawMarkdownBody'
  | 'childDataDictionaryAttribute.definition.fileAbsolutePath'
  | 'childDataDictionaryAttribute.definition.fields.fileRelativePath'
  | 'childDataDictionaryAttribute.definition.fields.slug'
  | 'childDataDictionaryAttribute.definition.html'
  | 'childDataDictionaryAttribute.definition.htmlAst'
  | 'childDataDictionaryAttribute.definition.excerptAst'
  | 'childDataDictionaryAttribute.definition.headings'
  | 'childDataDictionaryAttribute.definition.headings.id'
  | 'childDataDictionaryAttribute.definition.headings.value'
  | 'childDataDictionaryAttribute.definition.headings.depth'
  | 'childDataDictionaryAttribute.definition.timeToRead'
  | 'childDataDictionaryAttribute.definition.tableOfContents'
  | 'childDataDictionaryAttribute.definition.wordCount.paragraphs'
  | 'childDataDictionaryAttribute.definition.wordCount.sentences'
  | 'childDataDictionaryAttribute.definition.wordCount.words'
  | 'childDataDictionaryAttribute.definition.parent.id'
  | 'childDataDictionaryAttribute.definition.parent.children'
  | 'childDataDictionaryAttribute.definition.children'
  | 'childDataDictionaryAttribute.definition.children.id'
  | 'childDataDictionaryAttribute.definition.children.children'
  | 'childDataDictionaryAttribute.definition.internal.content'
  | 'childDataDictionaryAttribute.definition.internal.contentDigest'
  | 'childDataDictionaryAttribute.definition.internal.description'
  | 'childDataDictionaryAttribute.definition.internal.fieldOwners'
  | 'childDataDictionaryAttribute.definition.internal.ignoreType'
  | 'childDataDictionaryAttribute.definition.internal.mediaType'
  | 'childDataDictionaryAttribute.definition.internal.owner'
  | 'childDataDictionaryAttribute.definition.internal.type'
  | 'childDataDictionaryAttribute.events'
  | 'childDataDictionaryAttribute.events.name'
  | 'childDataDictionaryAttribute.events.definition.id'
  | 'childDataDictionaryAttribute.events.definition.excerpt'
  | 'childDataDictionaryAttribute.events.definition.rawMarkdownBody'
  | 'childDataDictionaryAttribute.events.definition.fileAbsolutePath'
  | 'childDataDictionaryAttribute.events.definition.html'
  | 'childDataDictionaryAttribute.events.definition.htmlAst'
  | 'childDataDictionaryAttribute.events.definition.excerptAst'
  | 'childDataDictionaryAttribute.events.definition.headings'
  | 'childDataDictionaryAttribute.events.definition.timeToRead'
  | 'childDataDictionaryAttribute.events.definition.tableOfContents'
  | 'childDataDictionaryAttribute.events.definition.children'
  | 'childDataDictionaryAttribute.events.dataSources'
  | 'childDataDictionaryAttribute.events.fileRelativePath'
  | 'childDataDictionaryAttribute.events.plugin'
  | 'childDataDictionaryAttribute.events.childrenDataDictionaryAttribute'
  | 'childDataDictionaryAttribute.events.childrenDataDictionaryAttribute.name'
  | 'childDataDictionaryAttribute.events.childrenDataDictionaryAttribute.events'
  | 'childDataDictionaryAttribute.events.childrenDataDictionaryAttribute.units'
  | 'childDataDictionaryAttribute.events.childrenDataDictionaryAttribute.fileRelativePath'
  | 'childDataDictionaryAttribute.events.childrenDataDictionaryAttribute.plugin'
  | 'childDataDictionaryAttribute.events.childrenDataDictionaryAttribute.id'
  | 'childDataDictionaryAttribute.events.childrenDataDictionaryAttribute.children'
  | 'childDataDictionaryAttribute.events.childDataDictionaryAttribute.name'
  | 'childDataDictionaryAttribute.events.childDataDictionaryAttribute.events'
  | 'childDataDictionaryAttribute.events.childDataDictionaryAttribute.units'
  | 'childDataDictionaryAttribute.events.childDataDictionaryAttribute.fileRelativePath'
  | 'childDataDictionaryAttribute.events.childDataDictionaryAttribute.plugin'
  | 'childDataDictionaryAttribute.events.childDataDictionaryAttribute.id'
  | 'childDataDictionaryAttribute.events.childDataDictionaryAttribute.children'
  | 'childDataDictionaryAttribute.events.id'
  | 'childDataDictionaryAttribute.events.parent.id'
  | 'childDataDictionaryAttribute.events.parent.children'
  | 'childDataDictionaryAttribute.events.children'
  | 'childDataDictionaryAttribute.events.children.id'
  | 'childDataDictionaryAttribute.events.children.children'
  | 'childDataDictionaryAttribute.events.internal.content'
  | 'childDataDictionaryAttribute.events.internal.contentDigest'
  | 'childDataDictionaryAttribute.events.internal.description'
  | 'childDataDictionaryAttribute.events.internal.fieldOwners'
  | 'childDataDictionaryAttribute.events.internal.ignoreType'
  | 'childDataDictionaryAttribute.events.internal.mediaType'
  | 'childDataDictionaryAttribute.events.internal.owner'
  | 'childDataDictionaryAttribute.events.internal.type'
  | 'childDataDictionaryAttribute.units'
  | 'childDataDictionaryAttribute.fileRelativePath'
  | 'childDataDictionaryAttribute.plugin'
  | 'childDataDictionaryAttribute.id'
  | 'childDataDictionaryAttribute.parent.id'
  | 'childDataDictionaryAttribute.parent.parent.id'
  | 'childDataDictionaryAttribute.parent.parent.children'
  | 'childDataDictionaryAttribute.parent.children'
  | 'childDataDictionaryAttribute.parent.children.id'
  | 'childDataDictionaryAttribute.parent.children.children'
  | 'childDataDictionaryAttribute.parent.internal.content'
  | 'childDataDictionaryAttribute.parent.internal.contentDigest'
  | 'childDataDictionaryAttribute.parent.internal.description'
  | 'childDataDictionaryAttribute.parent.internal.fieldOwners'
  | 'childDataDictionaryAttribute.parent.internal.ignoreType'
  | 'childDataDictionaryAttribute.parent.internal.mediaType'
  | 'childDataDictionaryAttribute.parent.internal.owner'
  | 'childDataDictionaryAttribute.parent.internal.type'
  | 'childDataDictionaryAttribute.children'
  | 'childDataDictionaryAttribute.children.id'
  | 'childDataDictionaryAttribute.children.parent.id'
  | 'childDataDictionaryAttribute.children.parent.children'
  | 'childDataDictionaryAttribute.children.children'
  | 'childDataDictionaryAttribute.children.children.id'
  | 'childDataDictionaryAttribute.children.children.children'
  | 'childDataDictionaryAttribute.children.internal.content'
  | 'childDataDictionaryAttribute.children.internal.contentDigest'
  | 'childDataDictionaryAttribute.children.internal.description'
  | 'childDataDictionaryAttribute.children.internal.fieldOwners'
  | 'childDataDictionaryAttribute.children.internal.ignoreType'
  | 'childDataDictionaryAttribute.children.internal.mediaType'
  | 'childDataDictionaryAttribute.children.internal.owner'
  | 'childDataDictionaryAttribute.children.internal.type'
  | 'childDataDictionaryAttribute.internal.content'
  | 'childDataDictionaryAttribute.internal.contentDigest'
  | 'childDataDictionaryAttribute.internal.description'
  | 'childDataDictionaryAttribute.internal.fieldOwners'
  | 'childDataDictionaryAttribute.internal.ignoreType'
  | 'childDataDictionaryAttribute.internal.mediaType'
  | 'childDataDictionaryAttribute.internal.owner'
  | 'childDataDictionaryAttribute.internal.type'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type DataDictionaryEventGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DataDictionaryEventEdge>;
  readonly nodes: ReadonlyArray<DataDictionaryEvent>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<DataDictionaryEventGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type DataDictionaryEventGroupConnection_distinctArgs = {
  field: DataDictionaryEventFieldsEnum;
};


type DataDictionaryEventGroupConnection_maxArgs = {
  field: DataDictionaryEventFieldsEnum;
};


type DataDictionaryEventGroupConnection_minArgs = {
  field: DataDictionaryEventFieldsEnum;
};


type DataDictionaryEventGroupConnection_sumArgs = {
  field: DataDictionaryEventFieldsEnum;
};


type DataDictionaryEventGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DataDictionaryEventFieldsEnum;
};

type DataDictionaryEventSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<DataDictionaryEventFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type DataDictionaryAttributeConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DataDictionaryAttributeEdge>;
  readonly nodes: ReadonlyArray<DataDictionaryAttribute>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<DataDictionaryAttributeGroupConnection>;
};


type DataDictionaryAttributeConnection_distinctArgs = {
  field: DataDictionaryAttributeFieldsEnum;
};


type DataDictionaryAttributeConnection_maxArgs = {
  field: DataDictionaryAttributeFieldsEnum;
};


type DataDictionaryAttributeConnection_minArgs = {
  field: DataDictionaryAttributeFieldsEnum;
};


type DataDictionaryAttributeConnection_sumArgs = {
  field: DataDictionaryAttributeFieldsEnum;
};


type DataDictionaryAttributeConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DataDictionaryAttributeFieldsEnum;
};

type DataDictionaryAttributeEdge = {
  readonly next: Maybe<DataDictionaryAttribute>;
  readonly node: DataDictionaryAttribute;
  readonly previous: Maybe<DataDictionaryAttribute>;
};

type DataDictionaryAttributeFieldsEnum =
  | 'name'
  | 'definition.id'
  | 'definition.frontmatter.isFeatured'
  | 'definition.frontmatter.translationType'
  | 'definition.frontmatter.title'
  | 'definition.frontmatter.subject'
  | 'definition.frontmatter.releaseDate'
  | 'definition.frontmatter.version'
  | 'definition.frontmatter.downloadLink'
  | 'definition.frontmatter.redirects'
  | 'definition.frontmatter.tags'
  | 'definition.frontmatter.metaDescription'
  | 'definition.frontmatter.type'
  | 'definition.frontmatter.translate'
  | 'definition.frontmatter.shortDescription'
  | 'definition.frontmatter.template'
  | 'definition.frontmatter.topics'
  | 'definition.frontmatter.contentType'
  | 'definition.frontmatter.s_Google_Cloud_Spanner_integration'
  | 'definition.frontmatter.description'
  | 'definition.frontmatter.s_legacy_SNMP_integration'
  | 'definition.frontmatter.startDate'
  | 'definition.frontmatter.endDate'
  | 'definition.frontmatter.name'
  | 'definition.frontmatter.events'
  | 'definition.frontmatter.units'
  | 'definition.frontmatter.summary'
  | 'definition.frontmatter.learnMoreLink'
  | 'definition.frontmatter.dataSources'
  | 'definition.frontmatter.getStartedLink'
  | 'definition.excerpt'
  | 'definition.rawMarkdownBody'
  | 'definition.fileAbsolutePath'
  | 'definition.fields.fileRelativePath'
  | 'definition.fields.slug'
  | 'definition.html'
  | 'definition.htmlAst'
  | 'definition.excerptAst'
  | 'definition.headings'
  | 'definition.headings.id'
  | 'definition.headings.value'
  | 'definition.headings.depth'
  | 'definition.timeToRead'
  | 'definition.tableOfContents'
  | 'definition.wordCount.paragraphs'
  | 'definition.wordCount.sentences'
  | 'definition.wordCount.words'
  | 'definition.parent.id'
  | 'definition.parent.parent.id'
  | 'definition.parent.parent.children'
  | 'definition.parent.children'
  | 'definition.parent.children.id'
  | 'definition.parent.children.children'
  | 'definition.parent.internal.content'
  | 'definition.parent.internal.contentDigest'
  | 'definition.parent.internal.description'
  | 'definition.parent.internal.fieldOwners'
  | 'definition.parent.internal.ignoreType'
  | 'definition.parent.internal.mediaType'
  | 'definition.parent.internal.owner'
  | 'definition.parent.internal.type'
  | 'definition.children'
  | 'definition.children.id'
  | 'definition.children.parent.id'
  | 'definition.children.parent.children'
  | 'definition.children.children'
  | 'definition.children.children.id'
  | 'definition.children.children.children'
  | 'definition.children.internal.content'
  | 'definition.children.internal.contentDigest'
  | 'definition.children.internal.description'
  | 'definition.children.internal.fieldOwners'
  | 'definition.children.internal.ignoreType'
  | 'definition.children.internal.mediaType'
  | 'definition.children.internal.owner'
  | 'definition.children.internal.type'
  | 'definition.internal.content'
  | 'definition.internal.contentDigest'
  | 'definition.internal.description'
  | 'definition.internal.fieldOwners'
  | 'definition.internal.ignoreType'
  | 'definition.internal.mediaType'
  | 'definition.internal.owner'
  | 'definition.internal.type'
  | 'events'
  | 'events.name'
  | 'events.definition.id'
  | 'events.definition.frontmatter.isFeatured'
  | 'events.definition.frontmatter.translationType'
  | 'events.definition.frontmatter.title'
  | 'events.definition.frontmatter.subject'
  | 'events.definition.frontmatter.releaseDate'
  | 'events.definition.frontmatter.version'
  | 'events.definition.frontmatter.downloadLink'
  | 'events.definition.frontmatter.redirects'
  | 'events.definition.frontmatter.tags'
  | 'events.definition.frontmatter.metaDescription'
  | 'events.definition.frontmatter.type'
  | 'events.definition.frontmatter.translate'
  | 'events.definition.frontmatter.shortDescription'
  | 'events.definition.frontmatter.template'
  | 'events.definition.frontmatter.topics'
  | 'events.definition.frontmatter.contentType'
  | 'events.definition.frontmatter.s_Google_Cloud_Spanner_integration'
  | 'events.definition.frontmatter.description'
  | 'events.definition.frontmatter.s_legacy_SNMP_integration'
  | 'events.definition.frontmatter.startDate'
  | 'events.definition.frontmatter.endDate'
  | 'events.definition.frontmatter.name'
  | 'events.definition.frontmatter.events'
  | 'events.definition.frontmatter.units'
  | 'events.definition.frontmatter.summary'
  | 'events.definition.frontmatter.learnMoreLink'
  | 'events.definition.frontmatter.dataSources'
  | 'events.definition.frontmatter.getStartedLink'
  | 'events.definition.excerpt'
  | 'events.definition.rawMarkdownBody'
  | 'events.definition.fileAbsolutePath'
  | 'events.definition.fields.fileRelativePath'
  | 'events.definition.fields.slug'
  | 'events.definition.html'
  | 'events.definition.htmlAst'
  | 'events.definition.excerptAst'
  | 'events.definition.headings'
  | 'events.definition.headings.id'
  | 'events.definition.headings.value'
  | 'events.definition.headings.depth'
  | 'events.definition.timeToRead'
  | 'events.definition.tableOfContents'
  | 'events.definition.wordCount.paragraphs'
  | 'events.definition.wordCount.sentences'
  | 'events.definition.wordCount.words'
  | 'events.definition.parent.id'
  | 'events.definition.parent.children'
  | 'events.definition.children'
  | 'events.definition.children.id'
  | 'events.definition.children.children'
  | 'events.definition.internal.content'
  | 'events.definition.internal.contentDigest'
  | 'events.definition.internal.description'
  | 'events.definition.internal.fieldOwners'
  | 'events.definition.internal.ignoreType'
  | 'events.definition.internal.mediaType'
  | 'events.definition.internal.owner'
  | 'events.definition.internal.type'
  | 'events.dataSources'
  | 'events.fileRelativePath'
  | 'events.plugin'
  | 'events.childrenDataDictionaryAttribute'
  | 'events.childrenDataDictionaryAttribute.name'
  | 'events.childrenDataDictionaryAttribute.definition.id'
  | 'events.childrenDataDictionaryAttribute.definition.excerpt'
  | 'events.childrenDataDictionaryAttribute.definition.rawMarkdownBody'
  | 'events.childrenDataDictionaryAttribute.definition.fileAbsolutePath'
  | 'events.childrenDataDictionaryAttribute.definition.html'
  | 'events.childrenDataDictionaryAttribute.definition.htmlAst'
  | 'events.childrenDataDictionaryAttribute.definition.excerptAst'
  | 'events.childrenDataDictionaryAttribute.definition.headings'
  | 'events.childrenDataDictionaryAttribute.definition.timeToRead'
  | 'events.childrenDataDictionaryAttribute.definition.tableOfContents'
  | 'events.childrenDataDictionaryAttribute.definition.children'
  | 'events.childrenDataDictionaryAttribute.events'
  | 'events.childrenDataDictionaryAttribute.events.name'
  | 'events.childrenDataDictionaryAttribute.events.dataSources'
  | 'events.childrenDataDictionaryAttribute.events.fileRelativePath'
  | 'events.childrenDataDictionaryAttribute.events.plugin'
  | 'events.childrenDataDictionaryAttribute.events.childrenDataDictionaryAttribute'
  | 'events.childrenDataDictionaryAttribute.events.id'
  | 'events.childrenDataDictionaryAttribute.events.children'
  | 'events.childrenDataDictionaryAttribute.units'
  | 'events.childrenDataDictionaryAttribute.fileRelativePath'
  | 'events.childrenDataDictionaryAttribute.plugin'
  | 'events.childrenDataDictionaryAttribute.id'
  | 'events.childrenDataDictionaryAttribute.parent.id'
  | 'events.childrenDataDictionaryAttribute.parent.children'
  | 'events.childrenDataDictionaryAttribute.children'
  | 'events.childrenDataDictionaryAttribute.children.id'
  | 'events.childrenDataDictionaryAttribute.children.children'
  | 'events.childrenDataDictionaryAttribute.internal.content'
  | 'events.childrenDataDictionaryAttribute.internal.contentDigest'
  | 'events.childrenDataDictionaryAttribute.internal.description'
  | 'events.childrenDataDictionaryAttribute.internal.fieldOwners'
  | 'events.childrenDataDictionaryAttribute.internal.ignoreType'
  | 'events.childrenDataDictionaryAttribute.internal.mediaType'
  | 'events.childrenDataDictionaryAttribute.internal.owner'
  | 'events.childrenDataDictionaryAttribute.internal.type'
  | 'events.childDataDictionaryAttribute.name'
  | 'events.childDataDictionaryAttribute.definition.id'
  | 'events.childDataDictionaryAttribute.definition.excerpt'
  | 'events.childDataDictionaryAttribute.definition.rawMarkdownBody'
  | 'events.childDataDictionaryAttribute.definition.fileAbsolutePath'
  | 'events.childDataDictionaryAttribute.definition.html'
  | 'events.childDataDictionaryAttribute.definition.htmlAst'
  | 'events.childDataDictionaryAttribute.definition.excerptAst'
  | 'events.childDataDictionaryAttribute.definition.headings'
  | 'events.childDataDictionaryAttribute.definition.timeToRead'
  | 'events.childDataDictionaryAttribute.definition.tableOfContents'
  | 'events.childDataDictionaryAttribute.definition.children'
  | 'events.childDataDictionaryAttribute.events'
  | 'events.childDataDictionaryAttribute.events.name'
  | 'events.childDataDictionaryAttribute.events.dataSources'
  | 'events.childDataDictionaryAttribute.events.fileRelativePath'
  | 'events.childDataDictionaryAttribute.events.plugin'
  | 'events.childDataDictionaryAttribute.events.childrenDataDictionaryAttribute'
  | 'events.childDataDictionaryAttribute.events.id'
  | 'events.childDataDictionaryAttribute.events.children'
  | 'events.childDataDictionaryAttribute.units'
  | 'events.childDataDictionaryAttribute.fileRelativePath'
  | 'events.childDataDictionaryAttribute.plugin'
  | 'events.childDataDictionaryAttribute.id'
  | 'events.childDataDictionaryAttribute.parent.id'
  | 'events.childDataDictionaryAttribute.parent.children'
  | 'events.childDataDictionaryAttribute.children'
  | 'events.childDataDictionaryAttribute.children.id'
  | 'events.childDataDictionaryAttribute.children.children'
  | 'events.childDataDictionaryAttribute.internal.content'
  | 'events.childDataDictionaryAttribute.internal.contentDigest'
  | 'events.childDataDictionaryAttribute.internal.description'
  | 'events.childDataDictionaryAttribute.internal.fieldOwners'
  | 'events.childDataDictionaryAttribute.internal.ignoreType'
  | 'events.childDataDictionaryAttribute.internal.mediaType'
  | 'events.childDataDictionaryAttribute.internal.owner'
  | 'events.childDataDictionaryAttribute.internal.type'
  | 'events.id'
  | 'events.parent.id'
  | 'events.parent.parent.id'
  | 'events.parent.parent.children'
  | 'events.parent.children'
  | 'events.parent.children.id'
  | 'events.parent.children.children'
  | 'events.parent.internal.content'
  | 'events.parent.internal.contentDigest'
  | 'events.parent.internal.description'
  | 'events.parent.internal.fieldOwners'
  | 'events.parent.internal.ignoreType'
  | 'events.parent.internal.mediaType'
  | 'events.parent.internal.owner'
  | 'events.parent.internal.type'
  | 'events.children'
  | 'events.children.id'
  | 'events.children.parent.id'
  | 'events.children.parent.children'
  | 'events.children.children'
  | 'events.children.children.id'
  | 'events.children.children.children'
  | 'events.children.internal.content'
  | 'events.children.internal.contentDigest'
  | 'events.children.internal.description'
  | 'events.children.internal.fieldOwners'
  | 'events.children.internal.ignoreType'
  | 'events.children.internal.mediaType'
  | 'events.children.internal.owner'
  | 'events.children.internal.type'
  | 'events.internal.content'
  | 'events.internal.contentDigest'
  | 'events.internal.description'
  | 'events.internal.fieldOwners'
  | 'events.internal.ignoreType'
  | 'events.internal.mediaType'
  | 'events.internal.owner'
  | 'events.internal.type'
  | 'units'
  | 'fileRelativePath'
  | 'plugin'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type DataDictionaryAttributeGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DataDictionaryAttributeEdge>;
  readonly nodes: ReadonlyArray<DataDictionaryAttribute>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<DataDictionaryAttributeGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type DataDictionaryAttributeGroupConnection_distinctArgs = {
  field: DataDictionaryAttributeFieldsEnum;
};


type DataDictionaryAttributeGroupConnection_maxArgs = {
  field: DataDictionaryAttributeFieldsEnum;
};


type DataDictionaryAttributeGroupConnection_minArgs = {
  field: DataDictionaryAttributeFieldsEnum;
};


type DataDictionaryAttributeGroupConnection_sumArgs = {
  field: DataDictionaryAttributeFieldsEnum;
};


type DataDictionaryAttributeGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DataDictionaryAttributeFieldsEnum;
};

type DataDictionaryAttributeSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<DataDictionaryAttributeFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type NavYamlConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<NavYamlEdge>;
  readonly nodes: ReadonlyArray<NavYaml>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<NavYamlGroupConnection>;
};


type NavYamlConnection_distinctArgs = {
  field: NavYamlFieldsEnum;
};


type NavYamlConnection_maxArgs = {
  field: NavYamlFieldsEnum;
};


type NavYamlConnection_minArgs = {
  field: NavYamlFieldsEnum;
};


type NavYamlConnection_sumArgs = {
  field: NavYamlFieldsEnum;
};


type NavYamlConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: NavYamlFieldsEnum;
};

type NavYamlEdge = {
  readonly next: Maybe<NavYaml>;
  readonly node: NavYaml;
  readonly previous: Maybe<NavYaml>;
};

type NavYamlFieldsEnum =
  | 'id'
  | 'title'
  | 'path'
  | 'icon'
  | 'filterable'
  | 'pages'
  | 'pages.id'
  | 'pages.title'
  | 'pages.path'
  | 'pages.icon'
  | 'pages.filterable'
  | 'pages.pages'
  | 'pages.pages.id'
  | 'pages.pages.title'
  | 'pages.pages.path'
  | 'pages.pages.icon'
  | 'pages.pages.filterable'
  | 'pages.pages.pages'
  | 'pages.pages.pages.id'
  | 'pages.pages.pages.title'
  | 'pages.pages.pages.path'
  | 'pages.pages.pages.icon'
  | 'pages.pages.pages.filterable'
  | 'pages.pages.pages.pages'
  | 'pages.pages.pages.rootNav'
  | 'pages.pages.pages.children'
  | 'pages.pages.rootNav'
  | 'pages.pages.parent.id'
  | 'pages.pages.parent.children'
  | 'pages.pages.children'
  | 'pages.pages.children.id'
  | 'pages.pages.children.children'
  | 'pages.pages.internal.content'
  | 'pages.pages.internal.contentDigest'
  | 'pages.pages.internal.description'
  | 'pages.pages.internal.fieldOwners'
  | 'pages.pages.internal.ignoreType'
  | 'pages.pages.internal.mediaType'
  | 'pages.pages.internal.owner'
  | 'pages.pages.internal.type'
  | 'pages.rootNav'
  | 'pages.parent.id'
  | 'pages.parent.parent.id'
  | 'pages.parent.parent.children'
  | 'pages.parent.children'
  | 'pages.parent.children.id'
  | 'pages.parent.children.children'
  | 'pages.parent.internal.content'
  | 'pages.parent.internal.contentDigest'
  | 'pages.parent.internal.description'
  | 'pages.parent.internal.fieldOwners'
  | 'pages.parent.internal.ignoreType'
  | 'pages.parent.internal.mediaType'
  | 'pages.parent.internal.owner'
  | 'pages.parent.internal.type'
  | 'pages.children'
  | 'pages.children.id'
  | 'pages.children.parent.id'
  | 'pages.children.parent.children'
  | 'pages.children.children'
  | 'pages.children.children.id'
  | 'pages.children.children.children'
  | 'pages.children.internal.content'
  | 'pages.children.internal.contentDigest'
  | 'pages.children.internal.description'
  | 'pages.children.internal.fieldOwners'
  | 'pages.children.internal.ignoreType'
  | 'pages.children.internal.mediaType'
  | 'pages.children.internal.owner'
  | 'pages.children.internal.type'
  | 'pages.internal.content'
  | 'pages.internal.contentDigest'
  | 'pages.internal.description'
  | 'pages.internal.fieldOwners'
  | 'pages.internal.ignoreType'
  | 'pages.internal.mediaType'
  | 'pages.internal.owner'
  | 'pages.internal.type'
  | 'rootNav'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type NavYamlGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<NavYamlEdge>;
  readonly nodes: ReadonlyArray<NavYaml>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<NavYamlGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type NavYamlGroupConnection_distinctArgs = {
  field: NavYamlFieldsEnum;
};


type NavYamlGroupConnection_maxArgs = {
  field: NavYamlFieldsEnum;
};


type NavYamlGroupConnection_minArgs = {
  field: NavYamlFieldsEnum;
};


type NavYamlGroupConnection_sumArgs = {
  field: NavYamlFieldsEnum;
};


type NavYamlGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: NavYamlFieldsEnum;
};

type NavYamlSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<NavYamlFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type TranslatedNavJsonConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<TranslatedNavJsonEdge>;
  readonly nodes: ReadonlyArray<TranslatedNavJson>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<TranslatedNavJsonGroupConnection>;
};


type TranslatedNavJsonConnection_distinctArgs = {
  field: TranslatedNavJsonFieldsEnum;
};


type TranslatedNavJsonConnection_maxArgs = {
  field: TranslatedNavJsonFieldsEnum;
};


type TranslatedNavJsonConnection_minArgs = {
  field: TranslatedNavJsonFieldsEnum;
};


type TranslatedNavJsonConnection_sumArgs = {
  field: TranslatedNavJsonFieldsEnum;
};


type TranslatedNavJsonConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: TranslatedNavJsonFieldsEnum;
};

type TranslatedNavJsonEdge = {
  readonly next: Maybe<TranslatedNavJson>;
  readonly node: TranslatedNavJson;
  readonly previous: Maybe<TranslatedNavJson>;
};

type TranslatedNavJsonFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'title'
  | 'englishTitle'
  | 'locale';

type TranslatedNavJsonGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<TranslatedNavJsonEdge>;
  readonly nodes: ReadonlyArray<TranslatedNavJson>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<TranslatedNavJsonGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type TranslatedNavJsonGroupConnection_distinctArgs = {
  field: TranslatedNavJsonFieldsEnum;
};


type TranslatedNavJsonGroupConnection_maxArgs = {
  field: TranslatedNavJsonFieldsEnum;
};


type TranslatedNavJsonGroupConnection_minArgs = {
  field: TranslatedNavJsonFieldsEnum;
};


type TranslatedNavJsonGroupConnection_sumArgs = {
  field: TranslatedNavJsonFieldsEnum;
};


type TranslatedNavJsonGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: TranslatedNavJsonFieldsEnum;
};

type TranslatedNavJsonSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<TranslatedNavJsonFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type TableOfContents_pageFragment = Pick<Mdx, 'mdxAST'>;

type MainLayout_queryFragment = { readonly rootNav: Maybe<Pick<Nav, 'id'>>, readonly nav: Maybe<(
    Pick<Nav, 'id' | 'title' | 'url' | 'filterable'>
    & { readonly pages: ReadonlyArray<(
      { readonly pages: ReadonlyArray<(
        { readonly pages: ReadonlyArray<(
          { readonly pages: ReadonlyArray<(
            { readonly pages: ReadonlyArray<(
              { readonly pages: ReadonlyArray<MainLayout_navPagesFragment> }
              & MainLayout_navPagesFragment
            )> }
            & MainLayout_navPagesFragment
          )> }
          & MainLayout_navPagesFragment
        )> }
        & MainLayout_navPagesFragment
      )> }
      & MainLayout_navPagesFragment
    )> }
  )> };

type MainLayout_navPagesFragment = Pick<NavItem, 'title' | 'url' | 'icon'>;

type pageUsersskilburnDocumentsGitHubdocsWebsitesrctemplatesdocPageJs235296388QueryVariables = Exact<{
  slug: Scalars['String'];
  locale: Maybe<Scalars['String']>;
}>;


type pageUsersskilburnDocumentsGitHubdocsWebsitesrctemplatesdocPageJs235296388Query = (
  { readonly mdx: Maybe<(
    Pick<Mdx, 'mdxAST' | 'body'>
    & { readonly frontmatter: Maybe<Pick<Frontmatter, 'title' | 'metaDescription' | 'type' | 'tags' | 'translationType'>>, readonly fields: Maybe<Pick<MdxFields, 'fileRelativePath'>>, readonly relatedResources: Maybe<ReadonlyArray<Pick<RelatedResource, 'title' | 'url'>>> }
    & TableOfContents_pageFragment
  )> }
  & MainLayout_queryFragment
);

type pageUsersskilburnDocumentsGitHubdocsWebsitesrctemplatesreleaseNoteJs359174647QueryVariables = Exact<{
  slug: Scalars['String'];
  locale: Maybe<Scalars['String']>;
}>;


type pageUsersskilburnDocumentsGitHubdocsWebsitesrctemplatesreleaseNoteJs359174647Query = (
  { readonly mdx: Maybe<(
    Pick<Mdx, 'body'>
    & { readonly frontmatter: Maybe<Pick<Frontmatter, 'subject' | 'version' | 'title' | 'releaseDate' | 'downloadLink' | 'metaDescription'>> }
  )> }
  & MainLayout_queryFragment
);

type pageUsersskilburnDocumentsGitHubdocsWebsitesrctemplateslandingPageJs441368778QueryVariables = Exact<{
  slug: Scalars['String'];
  locale: Maybe<Scalars['String']>;
}>;


type pageUsersskilburnDocumentsGitHubdocsWebsitesrctemplateslandingPageJs441368778Query = (
  { readonly mdx: Maybe<(
    Pick<Mdx, 'body'>
    & { readonly frontmatter: Maybe<Pick<Frontmatter, 'title' | 'metaDescription'>> }
  )> }
  & MainLayout_queryFragment
);

type pageUsersskilburnDocumentsGitHubdocsWebsitesrctemplatesreleaseNoteLandingPageJs1059589230QueryVariables = Exact<{
  slug: Scalars['String'];
  subject: Scalars['String'];
  locale: Maybe<Scalars['String']>;
}>;


type pageUsersskilburnDocumentsGitHubdocsWebsitesrctemplatesreleaseNoteLandingPageJs1059589230Query = (
  { readonly allMdx: { readonly nodes: ReadonlyArray<(
      Pick<Mdx, 'mdxAST'>
      & { readonly fields: Maybe<Pick<MdxFields, 'slug'>>, readonly frontmatter: Maybe<Pick<Frontmatter, 'title' | 'version' | 'releaseDate'>> }
    )> }, readonly mdx: Maybe<{ readonly frontmatter: Maybe<Pick<Frontmatter, 'subject'>> }> }
  & MainLayout_queryFragment
);

type pageUsersskilburnDocumentsGitHubdocsWebsitesrctemplateswhatsNewJs3466386670QueryVariables = Exact<{
  slug: Scalars['String'];
  locale: Maybe<Scalars['String']>;
}>;


type pageUsersskilburnDocumentsGitHubdocsWebsitesrctemplateswhatsNewJs3466386670Query = (
  { readonly site: Maybe<{ readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'siteUrl'>> }>, readonly markdownRemark: Maybe<(
    Pick<MarkdownRemark, 'html'>
    & { readonly frontmatter: Maybe<Pick<Frontmatter, 'title' | 'releaseDate' | 'summary' | 'learnMoreLink' | 'getStartedLink'>> }
  )> }
  & MainLayout_queryFragment
);

type PagesQueryQueryVariables = Exact<{ [key: string]: never; }>;


type PagesQueryQuery = { readonly allSiteFunction: { readonly nodes: ReadonlyArray<Pick<SiteFunction, 'functionRoute'>> }, readonly allSitePage: { readonly nodes: ReadonlyArray<Pick<SitePage, 'path'>> } };

type DataDictionaryFilter_eventsFragment = (
  Pick<DataDictionaryEvent, 'name' | 'dataSources'>
  & { readonly childrenDataDictionaryAttribute: Maybe<ReadonlyArray<Maybe<Pick<DataDictionaryAttribute, 'name'>>>> }
);

type pageUsersskilburnDocumentsGitHubdocsWebsitesrcpagesattributeDictionaryJs1100610524QueryVariables = Exact<{
  slug: Scalars['String'];
  locale: Scalars['String'];
}>;


type pageUsersskilburnDocumentsGitHubdocsWebsitesrcpagesattributeDictionaryJs1100610524Query = (
  { readonly allDataDictionaryEvent: { readonly edges: ReadonlyArray<{ readonly node: (
        Pick<DataDictionaryEvent, 'name' | 'dataSources'>
        & { readonly definition: Maybe<Pick<MarkdownRemark, 'html'>>, readonly childrenDataDictionaryAttribute: Maybe<ReadonlyArray<Maybe<(
          Pick<DataDictionaryAttribute, 'name' | 'units'>
          & { readonly definition: Pick<MarkdownRemark, 'html'>, readonly events: ReadonlyArray<Pick<DataDictionaryEvent, 'name'>> }
        )>>> }
        & DataDictionaryFilter_eventsFragment
      ) }> } }
  & MainLayout_queryFragment
);

type pageUsersskilburnDocumentsGitHubdocsWebsitesrcpagesindexJs1430918721QueryVariables = Exact<{
  slug: Scalars['String'];
  locale: Maybe<Scalars['String']>;
}>;


type pageUsersskilburnDocumentsGitHubdocsWebsitesrcpagesindexJs1430918721Query = (
  { readonly site: Maybe<{ readonly layout: Maybe<Pick<SiteLayout, 'contentPadding'>> }>, readonly allMarkdownRemark: { readonly edges: ReadonlyArray<{ readonly node: (
        Pick<MarkdownRemark, 'id'>
        & { readonly frontmatter: Maybe<Pick<Frontmatter, 'title'>>, readonly fields: Maybe<Pick<MarkdownRemarkFields, 'slug'>> }
      ) }> } }
  & MainLayout_queryFragment
);

type pageUsersskilburnDocumentsGitHubdocsWebsitesrcpageswhatsNewJs2141301087QueryVariables = Exact<{
  slug: Scalars['String'];
  locale: Maybe<Scalars['String']>;
}>;


type pageUsersskilburnDocumentsGitHubdocsWebsitesrcpageswhatsNewJs2141301087Query = (
  { readonly allMarkdownRemark: { readonly edges: ReadonlyArray<{ readonly node: (
        Pick<MarkdownRemark, 'id'>
        & { readonly frontmatter: Maybe<Pick<Frontmatter, 'title' | 'summary' | 'releaseDate'>>, readonly fields: Maybe<Pick<MarkdownRemarkFields, 'slug'>> }
      ) }> } }
  & MainLayout_queryFragment
);

type Unnamed_1_QueryVariables = Exact<{ [key: string]: never; }>;


type Unnamed_1_Query = { readonly site: Maybe<{ readonly layout: Maybe<Pick<SiteLayout, 'mobileBreakpoint'>> }> };

type Unnamed_2_QueryVariables = Exact<{ [key: string]: never; }>;


type Unnamed_2_Query = { readonly allMdx: { readonly nodes: ReadonlyArray<(
      Pick<Mdx, 'slug' | 'body'>
      & { readonly frontmatter: Maybe<Pick<Frontmatter, 'startDate' | 'endDate'>> }
    )> } };

type Unnamed_3_QueryVariables = Exact<{ [key: string]: never; }>;


type Unnamed_3_Query = { readonly site: Maybe<{ readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'contributingUrl'>> }> };

type Unnamed_4_QueryVariables = Exact<{ [key: string]: never; }>;


type Unnamed_4_Query = { readonly site: Maybe<{ readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'repository' | 'branch'>> }> };

type Unnamed_5_QueryVariables = Exact<{ [key: string]: never; }>;


type Unnamed_5_Query = { readonly site: Maybe<{ readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'siteUrl' | 'repository'>> }> };

type FooterQueryQueryVariables = Exact<{ [key: string]: never; }>;


type FooterQueryQuery = { readonly site: Maybe<{ readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'siteUrl' | 'repository'>> }>, readonly sitePage: Maybe<Pick<SitePage, 'id'>> };

type GlobalHeaderQueryQueryVariables = Exact<{ [key: string]: never; }>;


type GlobalHeaderQueryQuery = { readonly allLocale: { readonly nodes: ReadonlyArray<Pick<Locale, 'locale' | 'localName' | 'isDefault'>> } };

type GlobalNavLinkQueryQueryVariables = Exact<{ [key: string]: never; }>;


type GlobalNavLinkQueryQuery = { readonly site: Maybe<{ readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'siteUrl'>> }> };

type Unnamed_6_QueryVariables = Exact<{ [key: string]: never; }>;


type Unnamed_6_Query = { readonly site: Maybe<{ readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'siteUrl'>> }> };

type Unnamed_7_QueryVariables = Exact<{ [key: string]: never; }>;


type Unnamed_7_Query = { readonly allLocale: { readonly nodes: ReadonlyArray<Pick<Locale, 'name' | 'locale' | 'localName' | 'hrefLang' | 'isDefault'>> } };

type Unnamed_8_QueryVariables = Exact<{ [key: string]: never; }>;


type Unnamed_8_Query = { readonly site: Maybe<{ readonly layout: Maybe<Pick<SiteLayout, 'mobileBreakpoint'>> }> };

type Unnamed_9_QueryVariables = Exact<{ [key: string]: never; }>;


type Unnamed_9_Query = { readonly site: Maybe<{ readonly layout: Maybe<Pick<SiteLayout, 'mobileBreakpoint'>> }> };

type Unnamed_10_QueryVariables = Exact<{ [key: string]: never; }>;


type Unnamed_10_Query = { readonly site: Maybe<{ readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'siteUrl'>> }>, readonly newRelicThemeConfig: Maybe<{ readonly relatedResources: { readonly labels: ReadonlyArray<Pick<RelatedResourceLabel, 'baseUrl' | 'label'>> } }> };

type Unnamed_11_QueryVariables = Exact<{ [key: string]: never; }>;


type Unnamed_11_Query = { readonly site: Maybe<{ readonly siteMetadata: Maybe<(
      Pick<SiteSiteMetadata, 'titleTemplate' | 'siteUrl'>
      & { defaultTitle: SiteSiteMetadata['title'] }
    )> }>, readonly allLocale: { readonly nodes: ReadonlyArray<Pick<Locale, 'locale' | 'hrefLang' | 'isDefault'>> } };

type Unnamed_12_QueryVariables = Exact<{ [key: string]: never; }>;


type Unnamed_12_Query = { readonly newRelicThemeConfig: Maybe<{ readonly tessen: Maybe<Pick<NewRelicThemeTessenConfig, 'product' | 'subproduct'>> }> };

type GatsbyImageSharpFixedFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_tracedSVGFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_withWebpFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFixed_withWebp_tracedSVGFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFixed_noBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_withWebp_noBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFluidFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluidLimitPresentationSizeFragment = { maxHeight: ImageSharpFluid['presentationHeight'], maxWidth: ImageSharpFluid['presentationWidth'] };

type GatsbyImageSharpFluid_tracedSVGFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluid_withWebpFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpFluid_withWebp_tracedSVGFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpFluid_noBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluid_withWebp_noBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

}