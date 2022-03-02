root="src/content/docs"
i18root="src/i18n/content"
imgroot="src/images"
paths=`find $root -name images -and -type d -print`
i18npaths=`find $i18root -name images -and -type d -print`

workflow=$1
content=$([ "$2" == "i18n" ] && echo $i18npaths || echo $paths)
echo $content

for path in $content
do
  echo -e "$path\n"
done


if [ $workflow == "cp" ]; then
for path in $content
  do
    if [ -d "$path/images"  ]; then
      for file in $path/images/*
      do
        mv $file "$imgroot/$newFileName"
      done
      echo -e "copied files\n\tFROM: $path/images/\n\tTO: $imgroot"
    else
      cp $path/* $imgroot
    for file in $path/*
    do
      mv $file "$imgroot/$newFileName"
    done
      echo -e "copied files\n\tFROM: $path/\n\tTO: $imgroot"
    fi
  done
fi

if [ $workflow == "rm" ]; then
  for path in $content
  do
    if [ -d "$path/images"  ]; then
      rm -rf $path/images
      echo -e "removed path $path/images from directory"
    else
      rm -rf $path
      echo -e "removed path $path from directory"
    fi
  done
fi

if [ $workflow == "mv" ]; then
  for img in $imgroot/*
  do
    echo $("$img | tr % _")
  done
fi
