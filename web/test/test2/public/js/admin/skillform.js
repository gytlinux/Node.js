function check(form){
    if (form['article-title'].value==''){
        alert("请输入标题");
        form['article-title'].focus();
        return false;
        }
    if (form['article-tag'].value==''){
        alert("请输入标签");
        form['article-tag'].focus();
        return false;
        }
    if (form['article-intro'].value==''){
        alert("请输入简介");
        form['article-intro'].focus();
        return false;
        }
    if (form['editormd-markdown-doc'].value==''){
        alert("请输入内容");
        form['editormd-markdown-doc'].focus();
        return false;
        }
        return true;
    }

