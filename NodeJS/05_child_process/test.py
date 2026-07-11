# test.py

import sys

def main():
    print("Hello from Python!")
    print("This script is running via execFile in Node.js")

    # Example: show command-line arguments
    if len(sys.argv) > 1:
        print("Arguments passed:", sys.argv[1:])

if __name__ == "__main__":
    main()
