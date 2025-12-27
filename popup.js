// DOM Elements
const promptTitle = document.getElementById('promptTitle');
const promptText = document.getElementById('promptText');
const promptTags = document.getElementById('promptTags');
const saveBtn = document.getElementById('saveBtn');
const logsList = document.getElementById('logsList');
const searchBox = document.getElementById('searchBox');

// Tab switching
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
          document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
          document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
          btn.classList.add('active');
          const tabId = btn.dataset.tab + '-tab';
          document.getElementById(tabId).classList.add('active');
          if (btn.dataset.tab === 'history') loadLogs();
    });
});

// Save prompt
saveBtn.addEventListener('click', () => {
    const title = promptTitle.value.trim();
    const text = promptText.value.trim();
    const tags = promptTags.value.trim().split(',').map(t => t.trim()).filter(t => t);

                           if (!text) {
                                 alert('Please enter a prompt or seed');
                                 return;
                           }

                           const log = {
                                 id: Date.now(),
                                 title: title || 'Untitled',
                                 text: text,
                                 tags: tags,
                                 timestamp: new Date().toISOString()
                           };

                           chrome.storage.local.get('logs', (data) => {
                                 const logs = data.logs || [];
                                 logs.unshift(log);
                                 chrome.storage.local.set({ logs: logs }, () => {
                                         promptTitle.value = '';
                                         promptText.value = '';
                                         promptTags.value = '';
                                         promptText.focus();
                                         saveBtn.textContent = '✓ Saved!';
                                         setTimeout(() => { saveBtn.textContent = '💾 Save Prompt'; }, 1500);
                                 });
                           });
});

// Load logs
function loadLogs(filter = '') {
    chrome.storage.local.get('logs', (data) => {
          const logs = data.logs || [];
          const filtered = filter ? logs.filter(log => 
                                                      log.title.toLowerCase().includes(filter.toLowerCase()) ||
                  log.text.toLowerCase().includes(filter.toLowerCase())
                                                    ) : logs;

                                 if (filtered.length === 0) {
                                         logsList.innerHTML = '<div style="text-align:center;color:#999;">No logs yet</div>';
                                         return;
                                 }

                                 logsList.innerHTML = filtered.map(log => `
                                       <div class="log-item">
                                               <strong>${escapeHtml(log.title)}</strong><br>
                                                       <small>${escapeHtml(log.text.substring(0, 100))}</small><br>
                                                               <small style="color:#999;">${formatDate(log.timestamp)}</small><br>
                                                                       <button onclick="copyLog(${log.id})" style="margin-top:4px;">Copy</button>
                                                                               <button onclick="deleteLog(${log.id})" style="margin-top:4px;">Delete</button>
                                                                                     </div>
                                                                                         `).join('');
    });
}

// Copy log
window.copyLog = function(id) {
    chrome.storage.local.get('logs', (data) => {
          const log = (data.logs || []).find(l => l.id === id);
          if (log) {
                  const text = `${log.title}\n\n${log.text}`;
                  navigator.clipboard.writeText(text).then(() => alert('Copied!'));
          }
    });
};

// Delete log
window.deleteLog = function(id) {
    if (confirm('Delete this log?')) {
          chrome.storage.local.get('logs', (data) => {
                  const logs = (data.logs || []).filter(l => l.id !== id);
                  chrome.storage.local.set({ logs: logs }, () => loadLogs());
          });
    }
};

// Helper functions
function formatDate(isoString) {
    const date = new Date(isoString);
    const now = new Date();
    const diff = now - date;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);
    if (minutes < 1) return 'just now';
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    if (days < 7) return `${days}d ago`;
    return date.toLocaleDateString();
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Search
searchBox.addEventListener('input', (e) => loadLogs(e.target.value));
