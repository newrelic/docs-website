from github import Github
import os
import re

from invoke import run

token = os.getenv('GITHUB_TOKEN', '...')
g = Github(token)

uniques = {}
emails = os.getenv('MAILS', '...')
authors = os.getenv('AUTHORS', '...')
emails = emails.split()
print(emails)

authors = authors.split("%0A")
print(authors)
result = "## :rocket: What's new?\n\n\n"
i = 0

notes = os.getenv('NOTES', '...')
notes = notes.split("%0A")
print(notes)

while i < len(emails):
    if emails[i] in uniques:
        result += uniques[emails[i]]
    else:
        users = g.search_users(emails[i] + " in:email")
        try:
            print(users[0].login)
            uniques[emails[i]] = '@' + users[0].login
            result += '@' + users[0].login
        except:
            print(emails[i])
            try:
                pattern1 = "\+(.*?)\@"
                pattern2 = "(.*?)\@"
                substring1 = re.search(pattern1, emails[i])
                substring2 = re.search(pattern2, emails[i])
                if substring1:
                    isUser = g.get_user(substring1.group(1))
                    if isUser.login:
                        uniques[emails[i]] = '@' + substring1.group(1)
                        result += '@' + substring1.group(1)
                elif substring2:
                    isUser = g.get_user(substring2.group(1))
                    if isUser.login:
                        uniques[emails[i]] = '@' + substring2.group(1)
                        result += '@' + substring2.group(1)
            except:
                print(emails[i])
                uniques[emails[i]] = authors[i]
                result += authors[i]
                print("This users email is not public: ", emails[i])
    result += ''.join(notes[i])
    result += '\n'
    i += 1

run('echo "RESULT<<EOF" >> $GITHUB_ENV')
run('echo "%s" >> $GITHUB_ENV' % result)
run('echo "EOF" >> $GITHUB_ENV')  