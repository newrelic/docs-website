#!/usr/bin/env bash

SCRIPT_HEADER=(
"# -----------------------------------------------------"
"# Warn about keys as github action                     "
"#                                                      "
"# App    : Check For Keys Github Action                "
"# Author : Clark McAdoo                                "
"# Company: New Relic                                   "
"# Email  : jmcadoo@newrelic.com                        "
"# License: MIT                                         "
"#                                                      "
"# debug mode:                                          "
"# export CFK_DEBUG=1; ./check-for-keys-pre-commit.sh   "
"# -----------------------------------------------------"
)


# --------------------------  KEY PATTERNS

declare -r CFK_OLD_INGEST_KEY="(LICENSE_KEY|license_key|licenseKey)\s*[=:]?\s*[a-f0-9]{40}"
declare -r CFK_INGEST_KEY="[a-f0-9]{32}[A-F]{4}NRAL"
declare -r CFK_INGEST_KEY_OLD="[a-f0-9]{36}NRAL"
declare -r CFK_BROWSER_KEY="NRJS-[a-f0-9]{19}"
declare -r CFK_BROWSER_KEY_OLD="NRBR-[a-f0-9]{19}"
declare -r CFK_API_KEY="[A-Z]{4}-[A-Z0-9]{27}"
declare -r CFK_PRIVATE_LOCATION_KEY="[A-Z]{4}-[a-z]{2}[A-F0-9]{33}"
declare -r CFK_PRIVATE_LOCATION_KEY_OLD="MINION_PRIVATE_LOCATION_KEY=[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}"
declare -r CFK_INSERT_KEY="NRII-[a-zA-Z0-9]{5}-[a-zA-Z0-9]{5}-[a-zA-Z0-9]{20}"
declare -r CFK_INSERT_KEY_OLD="NRII-[a-zA-Z0-9]{9}_[a-zA-Z0-9]{12}_[a-zA-Z0-9]{9}"
declare -r CFK_MOBILE_APP_KEY="[A-Z]{2}[a-f0-9]{40}-NRMA"
declare -r CFK_REST_API_KEY="NRRA-[a-f0-9]{42}"
declare -r CFK_DJANGO_KEY="SECRET_KEY\s*=\s*['\"]([[:graph:]]{50})['\"]"
declare -r CFK_MONGODB="mongodb.*[^@\s]+@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}"
declare -r CFK_NR_KEY_REGEX="$CFK_OLD_INGEST_KEY|$CFK_INGEST_KEY|$CFK_INGEST_KEY_OLD|$CFK_BROWSER_KEY|$CFK_BROWSER_KEY_OLD|$CFK_API_KEY|$CFK_PRIVATE_LOCATION_KEY|$CFK_PRIVATE_LOCATION_KEY_OLD|$CFK_INSERT_KEY|$CFK_INSERT_KEY_OLD|$CFK_MOBILE_APP_KEY|$CFK_REST_API_KEY|$CFK_DJANGO_KEY|$CFK_MONGODB"

# --------------------------  COLOR VARIABLES

declare -r COLOR='\033[0'

declare -r BLACK='0'
declare -r RED='1'
declare -r GREEN='2'
declare -r YELLOW='3'
declare -r BLUE='4'
declare -r PURPLE='5'
declare -r TEAL='6'
declare -r GRAY='7'
declare -r WHITE='9'

declare -r FG='3'
declare -r BG='4'

# --------------------------  BACKGROUND COLORS

declare -r GRAY_BLACK="${COLOR};${BG}${GRAY};${FG}${BLACK}m"
declare -r RED_BLACK="${COLOR};${BG}${RED};${FG}${BLACK}m"
declare -r TEAL_BLACK="${COLOR};${BG}${TEAL};${FG}${BLACK}m"
declare -r PURPLE_BLACK="${COLOR};${BG}${PURPLE};${FG}${BLACK}m"
declare -r BLUE_BLACK="${COLOR};${BG}${BLUE};${FG}${BLACK}m"
declare -r YELLOW_BLACK="${COLOR};${BG}${YELLOW};${FG}${BLACK}m"
declare -r GREEN_BLACK="${COLOR};${BG}${GREEN};${FG}${BLACK}m"
declare -r BLACK_WHITE="${COLOR};${BG}${BLACK};${FG}${WHITE}m"

# --------------------------  FOREGROUND COLORS

declare -r NONE_GRAY="${COLOR};0;${FG}${GRAY}m"
declare -r NONE_RED="${COLOR};0;${FG}${RED}m"
declare -r NONE_TEAL="${COLOR};0;${FG}${TEAL}m"
declare -r NONE_PURPLE="${COLOR};0;${FG}${PURPLE}m"
declare -r NONE_BLUE="${COLOR};0;${FG}${BLUE}m"
declare -r NONE_YELLOW="${COLOR};0;${FG}${YELLOW}m"
declare -r NONE_GREEN="${COLOR};0;${FG}${GREEN}m"
declare -r NONE_BLACK="${COLOR};0;${FG}${BLACK}m"

# --------------------------  DEFAULT

declare -r NONE_WHITE="${COLOR};0;${FG}${WHITE}m"

# --------------------------  COLORED SYMBOLS

declare -r GRAY_HASH="${NONE_GRAY}#${NONE_WHITE}"
declare -r RED_HASH="${NONE_RED}#${NONE_WHITE}"
declare -r TEAL_HASH="${NONE_TEAL}#${NONE_WHITE}"
declare -r PURPLE_HASH="${NONE_PURPLE}#${NONE_WHITE}"
declare -r BLUE_HASH="${NONE_BLUE}#${NONE_WHITE}"
declare -r YELLOW_HASH="${NONE_YELLOW}#${NONE_WHITE}"
declare -r GREEN_HASH="${NONE_GREEN}#${NONE_WHITE}"
declare -r BLACK_HASH="${NONE_BLACK}#${NONE_WHITE}"

declare -r GRAY_CHK="${NONE_GRAY}✔${NONE_WHITE}"
declare -r RED_CHK="${NONE_RED}✔${NONE_WHITE}"
declare -r TEAL_CHK="${NONE_TEAL}✔${NONE_WHITE}"
declare -r PURPLE_CHK="${NONE_PURPLE}✔${NONE_WHITE}"
declare -r BLUE_CHK="${NONE_BLUE}✔${NONE_WHITE}"
declare -r YELLOW_CHK="${NONE_YELLOW}✔${NONE_WHITE}"
declare -r GREEN_CHK="${NONE_GREEN}✔${NONE_WHITE}"
declare -r BLACK_CHK="${NONE_BLACK}✔${NONE_WHITE}"

declare -r YELLOW_X="${NONE_YELLOW}✘${NONE_WHITE}"
declare -r RED_X="${NONE_RED}✘${NONE_WHITE}"

# --------------------------  LIBRARIES

lib_has() {
  type "$1" >/dev/null 2>&1
}

# --------------------------  USER IO

# output message with encoded characters
# $1 -> string
lib_msg() {
  echo "$1"
}

# output message with encoded characters and no trailing newline
# $1 -> string
lib_msg2() {
  echo -ne "$1"
}

lib_alert() {
  lib_msg "${RED_BLACK} ${1}${2} ${NONE_WHITE}"
  # lib_pause
}

lib_notify() {
  lib_msg "${GRAY_BLACK} ${1}${2} ${NONE_WHITE}"
}

lib_notify2() {
  lib_msg "${YELLOW_BLACK} ${1}${2} ${NONE_WHITE}"
}

lib_notify3() {
  lib_msg "${BLUE_BLACK} ${1}${2} ${NONE_WHITE}"
}

# --------------------------  ERROR HANDLING

# display success message
# $1 -> string
# $2 -> string
lib_success() {
  if [ -z "$RET" ] || [ "$RET" -eq 0 ]; then
    lib_msg "${GREEN_CHK} ${1}${2}"
    # lib_pause
  fi
}

# display warn message
# $1 -> string
# $2 -> string
lib_warn() {
  if [ "$RET" -gt 0 ]; then
    lib_msg "${YELLOW_X} ${FUNCNAME[1]}(${BASH_LINENO[0]}) - Warning: ${1}${2}"
    # lib_pause
  fi
}

# display error message
# $1 -> string
# $2 -> string
lib_error() {
  lib_msg "${RED_X} ${FUNCNAME[1]}(${BASH_LINENO[0]}) - An error has occurred. ${1}${2}"
  [ "$RET" -gt 0 ] && exit 1
}

# check if variable is set
# $1 -> string
lib_variable_set() {
  [ -z "$1" ] && lib_error "${FUNCNAME[1]}(${BASH_LINENO[0]}) - Variable not set." && exit 1
}

lib_brew_must_exist() {
  local brewPath
  brewPath="$(which brew)"

  [ -z "${brewPath}" ] && lib_alert "brew not found in PATH...skipping" && return

  if ! brew list --formula | grep -q "${1}"; then
    lib_notify2 "$1 must be installed to continue."
    lib_pause "Press [Enter] to install it with brew" true
    brew install "$1"
    lib_pause
  fi
}

lib_stack_trace() {
  local i
  lib_notify3 "${1}"
  lib_notify2 "STACK TRACE"
  for (( i=1; i<${#FUNCNAME[*]}; i++ )); do
    lib_notify2 "  ${FUNCNAME[$i]}(${BASH_LINENO[$i-1]})"
  done
}

# --------------------------  SETUP PARAMETERS

# run with environment variable
# export CFK_DEBUG=1; ./cki.sh
# to see debug info
[ -z "$CFK_DEBUG" ] && CFK_DEBUG=0

CFK_APP_NAME="Check For Keys Pre-Commit Hook"
CFK_OS="$(uname -s)"
CFK_DIR="$(pwd)/"

# --------------------------  ERROR HANDLING

# error handling
handle_error() {
  if [ -z "$CFK_NR_KEY_REGEX" ]; then
    [ $CFK_DEBUG -eq 1 ] && lib_stack_trace ""
    RET=1
    lib_error "CFK_NR_KEY_REGEX variable is null."
  fi
}

# --------------------------  MAIN FUNCTIONS

# print debug info
debug_print() {
  if [ $CFK_DEBUG -eq 1 ]; then
    for line in "${SCRIPT_HEADER[@]}"
    do
      echo "$line"
    done
    echo
    # print out variable values in debug mode
    lib_notify3 "**Debug mode enabled**"
    lib_notify3 "App Name: $CFK_APP_NAME"
    lib_notify3 "OS: $CFK_OS"
    lib_notify3 "Dir: $CFK_DIR"
  fi
}

# TODO: read in options to use (no. of commits in PR, file paths of files changed)

key_check() {
  local keyMatches
  local commitKeyMatches

  handle_error

  # redirect STDOUT to STDERR
  exec 1>&2

  # check for keys in tracked files in working tree
  keyMatches=$(git grep -IE --color=always --line-number "$CFK_NR_KEY_REGEX" -- ":!gatsby-config.js")

  if [ -z "$keyMatches" ]; then
    lib_success "New Relic keys not found in tracked files. Yay!"
  else
    lib_alert "New Relic keys found in tracked files!"
    lib_msg "Please redact the following keys with [REDACTED] and try your commit again."
    echo -e "$keyMatches"
    exit 1  # non-zero exit status will cancel commit
  fi

  # check for keys in all historical commits
  commitHashesOnThisBranch=$(git log --oneline origin/develop.. --format="%h")
  local anyMatches=()

  for hash in $commitHashesOnThisBranch; do
    local diff="$(git show $hash -U0 --format='')"
    local matches=$(echo $diff | grep --extended-regexp -c "$CFK_NR_KEY_REGEX")

    if [ $matches -gt 0 ]; then
      anyMatches+=($hash);
    fi
  done

  if [ ${#anyMatches[@]} -gt 0 ]; then
    lib_alert "New Relic keys found in historical commits!"
    lib_msg "Please consider removing or redacting the keys from the following commits:"
    for commit in ${anyMatches[@]}; do
      lib_msg "$commit"
    done
    exit 1 # non-zero exit status will cancel commit
  else
    lib_success "New Relic keys not found in historical commits. Yay!"
  fi
}

# unset functions to free up memmory
reset() {
  unset -f debug_print key_check reset
}

# --------------------------  MAIN

debug_print
key_check
reset
