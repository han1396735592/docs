# rm -rf docs

# vuepress build 
./deploy-oss.sh
# 导航到构建输出目录
# mv .vuepress/dist .
# mv dist docs
echo 'docs.github.qqhxj.cn' > docs/CNAME
git init
git add .
git commit -m 'deploy'

# 推到你仓库的的 gh-page 分支
# 将 <USERNAME>/<REPO> 替换为你的信息
git push -f git@github.com:/han1396735592/docs.git master
# 打开浏览器
start chrome https://docs.github.qqhxj.cn