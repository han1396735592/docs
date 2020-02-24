# 判断参数的个数是不是大于2
if [[ "$#" -ge "2" ]];then

  # 删除bucker额所有内容
	ossutil rm "oss://$1/" -r -f
	echo "rm oss://$1/ success "

	# 拷贝要上传的文件到根目录
	ossutil cp $2 "oss://$1" -r
	echo "cp $2 to oss://$1 success"
	
	if [[ "$#" -eq "3" && "$3" == "--backup" ]];then
    # 拷贝要上传的文件到备份的目录
    ossutil cp $2 "oss://qqhxj-backup/$1/$(date "+%Y-%m-%d %H:%M:%S")" -r
    echo "backup $2 to oss://qqhxj-backup/$1 success"
  fi

	echo "deploy success"
else

  echo "parameter err"
	echo "such as: oss-deploy.sh buckerName dir [--backup]"
fi


