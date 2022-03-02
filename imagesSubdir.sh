root="src/content/docs"
i18root="src/i18n/content"
imgroot="src/images"
paths=`find $root -name images -and -type d -print`
i18npaths=`find $i18root -name images -and -type d -print`

workflow=$1
content=$([ "$2" == "i18n" ] && echo $i18npaths || echo $paths)

if [ $workflow == "cp" ]; then
for path in $content
  do
    if [ -d "$path/images"  ]; then
      for file in $path/images/*
      do
        mv $file "$imgroot/$newFileName"
      done
    else
      mv $path/* $imgroot
    for file in $path/*
    do
      mv $file "$imgroot/$newFileName"
    done
    fi
  done
fi

if [ $workflow == "rm" ]; then
  for path in $content
  do
    if [ -d "$path/images"  ]; then
      rm -rf $path/images
    else
      rm -rf $path
    fi
  done
fi
