# 浪漫小站（Love Template）

简洁优雅的单页中文浪漫主题模板，包含：Hero、关于、相册、回执（RSVP）表单。

如何快速部署
1. 在本地创建并初始化仓库：
   ```bash
   git init
   git add .
   git commit -m "Initial commit: 中文浪漫模板"
   git branch -M main
   ```

2. 使用 GitHub CLI（推荐）创建并推送到新仓库：
   ```bash
   gh repo create <你的用户名>/<仓库名> --public --source=. --remote=origin --push
   ```
   或者先在 GitHub 网页上新建仓库，再：
   ```bash
   git remote add origin https://github.com/<你的用户名>/<仓库名>.git
   git push -u origin main
   ```

3. 启用 GitHub Pages（如果想用 GitHub Pages 托管）：
   - 打开仓库 Settings → Pages，选择 `main` 分支并保存（路径为 / （root））。
   - 等待几分钟，页面会在 https://<你的用户名>.github.io/<仓库名>/ 可访问。

其他说明
- 若需要我把文件直接推到已存在的仓库，请回复并提供 `owner/repo`（例如：MichaelYu9/love-template）并确认让我推送。
- 也可以告诉我希望的仓库公开或私有、是否需要添加 LICENSE、.gitignore（我可以为你生成）。