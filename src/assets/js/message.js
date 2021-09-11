export default {
    data() {
        return {
            comments: [{
                content: '',
                commentId: ''
            }], //所有评论数据
            contents: '', //评论输入的内容
            Show: true,
            pageIndex: 1,
        }
    },
    methods: {
        Sh() {
            const tokenStr = window.sessionStorage.getItem('tokenStr');
            if (!tokenStr) {
                this.$router.push('/loginmu');
            }
        },
        Shbutton() {
            const tokenStr = window.sessionStorage.getItem('tokenStr');
            if (!tokenStr) {
                this.Show = true;
            } else {
                this.Show = false;
            }
        },
        getcomments() {
            this.getRequest('/api/comment/playlist?id=2852399742' + "?pageIndex=" + this.pageIndex).then(res => {
                if (res.data.code == 200) {
                    // this.comments = res.data.comments;
                    this.comments = this.comments.concat(res.data.comments)
                    console.log(res);
                } else {
                    this.$message.console.error(res.data.msg);
                }
            }).catch(error => {
                console.log(error);
            })
        },
        addcomments() {
            if (this.contents.trim().length === 0) {
                return this.$message({
                    message: '发送消息不能为空',
                    type: 'warning'
                });
            }
            this.postRequest('/api/comment', {
                t: 1,
                type: 2,
                id: 2852399742,
                content: this.contents
            }).then(res => {
                if (res.data.code == 200) {
                    var cmt = {
                        content: this.contents.trim(),
                    }
                    this.comments.unshift(cmt);
                    this.contents = "";
                    this.$message({
                        message: '操作成功',
                        type: 'success'
                    });
                } else {
                    this.$message.console.error(res.data.msg);
                }
            }).catch(error => {
                console.log(error);
                this.$message.error("无法获取信息");
            })
        },
        getmore() {
            this.pageIndex++;
            this.getcomments();
        }
    },
    created() {
        this.getcomments();
        this.Shbutton();
    },
}