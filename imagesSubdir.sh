root="src/content/docs"
i18root="src/i18n/content"
imgroot="src/images"
paths=`find $root -name images -and -type d -print`
i18paths=`find $i18root -name images -and -type d -print`

workflow=$1

if [ $workflow == "cp" ]; then
for path in $paths
  do
    if [ -d "$path/images"  ]; then
      cp $path/images/* $imgroot
      echo -e "copied files\n\tFROM: $path/images/\n\tTO: $imgroot"
      # rm -rf $path/images
      # echo -e "removed path $path/images from directory"
    else 
      cp $path/* $imgroot
      echo -e "copied files\n\tFROM: $path/\n\tTO: $imgroot"
      # rm -rf $path
      # echo -e "removed path $path from directory"
    fi
  done
fi

if [ $workflow == "rm" ]; then 
  for path in $paths
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
