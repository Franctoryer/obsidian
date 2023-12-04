nmap n <C-e>
nmap m <C-y>
imap jj <Esc>

unmap <Space>
exmap enrich_vim_search_pattern obcommand obsidian-vim-multibyte-char-search:enrich-current-vim-search-pattern
exmap search_multibytes obcommand obsidian-vim-multibyte-char-search:search-multibytes
nmap <Space>b :enrich_vim_search_pattern
nmap <Space>/ :search_multibytes
