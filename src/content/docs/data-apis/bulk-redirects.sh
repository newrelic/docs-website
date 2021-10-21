#!/bin/bash
########################################################################
# bulk-redirects.sh
#
# DESCRIPTION
# The purpose of this script is to make bulk redirect changes easier and more accurate.
# When you want to move an entire directory to somewhere else in the taxonomy,
# you can use this script as part of a two step process:
#   1. Before you move any directories, run this script to add the current redirects.
#   2. After you run the script, manually move the directories to wherever you want them.
#
# INSTRUCTIONS
# To use this script:
#   1. Copy this script into the top-level directory containing the files to change.
#      For example, to create redirects for all the files in and under the "agents" 
#      directory, insert this script in the "agents" directory.
#   2. Open a command-line session and go to the directory where you copied this script.
#   3. Execute the script: bash bulk-redirects
#   4. At the confirmation prompt, enter "y" to continue.
#      NOTE: If you no longer want to run the script, click CTRL+C to quit.
#   5. When the script completes, copy the file "redirects-to-test.txt" to a safe place.
#
# Do the following housekeeping tasks:
#   1. Move the directories to their new location in the file system.
#   2. Manually move the old navigation tree in the .nav file either into its new location
#      in the same file, or move it to whichever .nav file yout want.
#   3. Do a search and replace on all the old prefixes, changing them to the new prefix. VS Code allows
#      regular expressions in search to help you target the values you want to change. 
#   4. Rebuild the site, confirm the left navigation works, and test each of the URLs in 
#      "redirects-to-test.txt." 
# 
# HISTORY: 
# Version  Who                When          What
# -------  -----------------  ------------  -----------------------------------------
#    1     Rob Siebens        04/28/2021    Created script
#    2     Rob Siebens        05/02/2021    Added step to remove "index" files
#    3     Rob Siebens        10/19/2021    Added directory auto detection
########################################################################

# echo "Starting with /docs, type the path up to and including the directory you are in."
# echo "For example, if you are running this script in the agent directory to "
# echo "change all the agent's child mdx files, type this: /docs/agents/"
echo

# Figure out the upstream directory to pre-pend to the current directory
currentDirectory=$(pwd)
# Chop off the directories that precede the docs directory:
finalCurrentDirectory=$(echo "${currentDirectory}" | sed -e "s/.*\/content\/docs/\/docs/")
# Add a final forward slash to the directory:
finalCurrentDirectory=$(echo "${finalCurrentDirectory}" | sed 's![^/]$!&/!')


echo "Do you want to change redirects for all the files"
echo "below $finalCurrentDirectory [y/n]? "
read yesNo
    case $yesNo in
      [Yy]* )
        echo "OK, give me a moment to insert those redirects!"
        echo
        ;;
      [Nn]* )
        echo "OK, we bailed out of the script and didn't do anything!"
        exit;;
    esac
   
directoryPrefix="  - $finalCurrentDirectory" # Create a redirect prefix that can be used by printf.

IFS=$'\t\n' #Set internal field separator so it ignores spaces in directory names.

# Use shell find command to locate files and paths, but chop off the dot and forward slash at beginning:
directoryArray=($(find . -type f -name "*.mdx" | sed -e "s/^.\///" ))
directoryArrayLength=${#directoryArray[@]}

for (( h=0; h<${directoryArrayLength}; h++ )); 

do
    # Create a redirect array:
    initialRedirect=$(echo "${directoryArray[$h]}" | sed -e "s/.mdx$//") # Chop off the .mdx extension
    intermediateRedirect=$(echo "${initialRedirect}" | sed -e "s/index$//") #Chop off any index files
    finalRedirect="${directoryPrefix}${intermediateRedirect}" 

    existingRedirect="redirects:" # The literal value we'll insert if there isn't a redirect section.

    if [[ $(grep "^redirects:$" "${directoryArray[$h]}") ]]  # Is there an exisitng redirects entry?
    then  
      # Insert the new redirect at the top of the list of existing redirects: 
      printf '%s\n' /^redirects:/a $finalRedirect . w q | ex -s ${directoryArray[$h]}
      echo -e "$finalRedirect\n" >> redirects-to-test.txt 
    else
      # Insert a new redirect section and add the new redirect below it.
      n=$( sed -n '/^---$/=' ${directoryArray[$h]} | sed -n 2p )
  
      if test "$n"
      then   
        sed -i '' -e "$n i\\
redirects:\\
$finalRedirect
        " ${directoryArray[$h]}
        echo -e "$finalRedirect\n" >> redirects-to-test.txt 
      fi 

    fi

done

echo "You can find a list of redirects in this file: redirects-to-test.txt"
echo "After you move the directory and replace old prefixes in the nav file,"
echo "Test the redirects in your build."
