#!/bin/bash
configs=$(cat config.txt)
eval $(echo $configs | awk '{printf("var1=%s; var2=%s;",$1,$2)}')
echo -e "\033[32m 请确认是否提交 y/n \033[0;30m"
read submit
if [ $submit == 'y' ]; then
git pull
echo 开始提交
git add .
git status
npm run commit
git pull
echo -e "\033[32m 默认提交当前分支 \033[0;30m"
git push origin 
else 
echo "终止提交"
fi
