import sys
import subprocess
import difflib

def run_git_command(command):
    """A helper function to run a git command and return the output."""
    try:
        result = subprocess.run(command, capture_output=True, text=True, check=True, encoding='utf-8')
        
        return result.stdout.strip()
    except subprocess.CalledProcessError as e:
        print(f"Error executing command '{' '.join(command)}': {e.stderr}")
        sys.exit(1)
    except FileNotFoundError:
        print("Error: 'git' command not found. Is Git installed and in your PATH?")
        sys.exit(1)

def get_initial_commit(file_path):
    """Finds the very first commit hash for a given file."""
    command = ['git', 'log', '--reverse', '--pretty=format:%H', '--', file_path]
    all_commits = run_git_command(command)
    if not all_commits:
        return None
    initial_commit = all_commits.split('\n')[0]
    return initial_commit

def get_latest_commit(file_path):
    """Finds the most recent commit hash for a given file."""
    command = ['git', 'log', '-1', '--pretty=format:%H', '--', file_path]
    return run_git_command(command)

def get_file_content(commit_hash, file_path):
    """Extracts the content of a file from a specific git commit."""
    command = ['git', 'show', f'{commit_hash}:{file_path}']
    return run_git_command(command)

def analyze_character_diff(original_text, new_text):
    """
    Analyzes character-level differences and returns the percentage of
    unmodified characters from the original text.
    """
    if not original_text:
        return 0.0, 0.0

    unmodified_chars = 0
    matcher = difflib.SequenceMatcher(None, original_text, new_text, autojunk=False)

    for tag, i1, i2, j1, j2 in matcher.get_opcodes():
        if tag == 'equal':
            unmodified_chars += (i2 - i1)

    total_original_chars = len(original_text)
    unmodified_percentage = (unmodified_chars / total_original_chars) * 100
    modified_percentage = 100 - unmodified_percentage
    
    return modified_percentage, unmodified_percentage

if __name__ == "__main__":
    
    if len(sys.argv) == 2:
        # Mode 1: Automatic detection
        file_path = sys.argv[1]
        print(f"🔎 Automatically finding commits for: {file_path}...")
        old_commit = get_initial_commit(file_path)
        new_commit = get_latest_commit(file_path)
        if not old_commit:
            print(f"Error: Could not find any commits for '{file_path}'. Does the file exist and is it tracked by Git?")
            sys.exit(1)

    elif len(sys.argv) == 4:
        # Mode 2: Manual commit entry
        file_path = sys.argv[1]
        old_commit = sys.argv[2]
        new_commit = sys.argv[3]
        print(f"✅ Using provided commits for: {file_path}...")

    else:
        print("Usage (automatic): python diff_chars.py <file_path>")
        print("Usage (manual):   python diff_chars.py <file_path> <old_commit> <new_commit>")
        sys.exit(1)

    print(f"   Old commit: {old_commit[:7]}")
    print(f"   New commit: {new_commit[:7]}")
    print("--------------------------------------------------")

    original_content = get_file_content(old_commit, file_path)
    new_content = get_file_content(new_commit, file_path)

    modified_pct, unmodified_pct = analyze_character_diff(original_content, new_content)

    print(f"🔬 Character-level analysis for: {file_path}")
    print("--------------------------------------------------")
    print(f"Total characters in original (commit {old_commit[:7]}): {len(original_content)}")
    print(f"\nPercentage of original characters MODIFIED:   {modified_pct:.2f} %")
    print(f"Percentage of original characters UNMODIFIED: {unmodified_pct:.2f} %")