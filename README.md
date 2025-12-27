# 📝 Prompt Logger Chrome Extension

A lightweight Chrome extension to log prompts and seeds without copy-paste hassle. Store, search, and manage all your AI prompts in one place with local storage.

## Features

✅ **Quick Logging** - Save prompts instantly with optional titles and tags  
✅ **Search & Filter** - Find any prompt by title, content, or tags  
✅ **Local Storage** - All data stays on your device, no cloud sync required  
✅ **Copy to Clipboard** - One-click copying of saved prompts  
✅ **Clean UI** - Modern, beautiful popup interface  
✅ **No Permissions** - Only requires storage permission  

## Installation

### Option 1: From GitHub (Recommended)

1. **Download the extension**
2.    - Click the green "Code" button on the GitHub repo
      -    - Select "Download ZIP"
           -    - Extract the files to a folder
            
                - 2. **Open Chrome Extensions**
                  3.    - Go to `chrome://extensions/` in your browser
                        -    - Enable "Developer mode" (toggle in top-right)
                         
                             - 3. **Load the extension**
                               4.    - Click "Load unpacked"
                                     -    - Select the extracted folder containing `manifest.json`, `popup.html`, and `popup.js`
                                          -    - Done! The extension now appears in your toolbar
                                           
                                               - ### Option 2: Clone with Git
                                           
                                               - ```bash
                                                 git clone https://github.com/Joekoke/prompt-logger.git
                                                 cd prompt-logger
                                                 ```

                                                 Then follow steps 2-3 from Option 1 above.

                                                 ## Usage

                                                 1. **Click the extension icon** in your Chrome toolbar (purple icon with 📝)
                                                
                                                 2. 2. **Quick Log Tab**
                                                    3.    - Enter a prompt title (optional)
                                                          -    - Paste your prompt or seed
                                                               -    - Add tags separated by commas
                                                                    -    - Click "💾 Save Prompt"
                                                                     
                                                                         - 3. **History Tab**
                                                                           4.    - View all saved prompts
                                                                                 -    - Search by title, content, or tags
                                                                                      -    - Click "Copy" to copy to clipboard
                                                                                           -    - Click "Delete" to remove a prompt
                                                                                            
                                                                                                - ## File Structure
                                                                                            
                                                                                                - ```
                                                                                                  prompt-logger/
                                                                                                  ├── manifest.json    # Extension configuration
                                                                                                  ├── popup.html       # UI layout
                                                                                                  ├── popup.js         # Application logic
                                                                                                  └── README.md        # This file
                                                                                                  ```

                                                                                                  ## How It Works

                                                                                                  - All prompts are stored in Chrome's `chrome.storage.local` API
                                                                                                  - - Data persists even after closing the browser
                                                                                                    - - No data is sent anywhere - everything stays local
                                                                                                      - - Search functionality works in real-time
                                                                                                       
                                                                                                        - ## Keyboard Shortcuts
                                                                                                       
                                                                                                        - Once installed, you can use:
                                                                                                        - - `Alt+Shift+P` to open the extension (customizable in `chrome://extensions/`)
                                                                                                         
                                                                                                          - ## Privacy
                                                                                                         
                                                                                                          - This extension:
                                                                                                          - - ✅ Does NOT send data to any server
                                                                                                            - - ✅ Does NOT track you
                                                                                                              - - ✅ Does NOT require an account
                                                                                                                - - ✅ Does NOT have ads
                                                                                                                  - - Your data is completely private and local
                                                                                                                   
                                                                                                                    - ## Customization
                                                                                                                   
                                                                                                                    - Edit `popup.html` to change colors:
                                                                                                                    - - Change the gradient: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`
                                                                                                                      - - Modify button colors in the CSS
                                                                                                                        - - Adjust popup width: `width: 500px`
                                                                                                                         
                                                                                                                          - Edit `popup.js` to change behavior:
                                                                                                                          - - Storage key from `'logs'` to something else
                                                                                                                            - - Add more metadata to prompts
                                                                                                                              - - Implement export/import functionality
                                                                                                                               
                                                                                                                                - ## Troubleshooting
                                                                                                                               
                                                                                                                                - **Extension not showing up?**
                                                                                                                                - - Make sure Developer Mode is enabled
                                                                                                                                  - - Click "Load unpacked" and select the correct folder
                                                                                                                                   
                                                                                                                                    - **Prompts disappeared?**
                                                                                                                                    - - Clear your Chrome storage? They're stored in `chrome.storage.local`
                                                                                                                                      - - Check if you're in an incognito window (extensions work differently there)
                                                                                                                                       
                                                                                                                                        - **Getting errors in the console?**
                                                                                                                                        - - Open DevTools (F12)
                                                                                                                                          - - Check the "Console" tab for any red errors
                                                                                                                                            - - Try refreshing the extension or re-loading it
                                                                                                                                             
                                                                                                                                              - ## Future Ideas
                                                                                                                                             
                                                                                                                                              - - Export prompts to JSON
                                                                                                                                                - - Import from file or URL
                                                                                                                                                  - - Categories/Collections
                                                                                                                                                    - - Sharing prompts securely
                                                                                                                                                      - - Sync across devices (optional)
                                                                                                                                                        - - Keyboard shortcuts for quick save
                                                                                                                                                         
                                                                                                                                                          - ## License
                                                                                                                                                         
                                                                                                                                                          - MIT License - feel free to use, modify, and share!
                                                                                                                                                         
                                                                                                                                                          - ## Support
                                                                                                                                                         
                                                                                                                                                          - Found a bug? Have a feature request? Create an issue on GitHub!
                                                                                                                                                         
                                                                                                                                                          - ---
                                                                                                                                                          
                                                                                                                                                          **Happy logging!** 🎉
