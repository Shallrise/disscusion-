<template>
   <div id="discuss">
        <div class="diss">
            <hr icon="iconfont el-icon-scissors">
            <div id="commend">
                <div class="commend-head">
                    <div class="commend-head-ti">
                        <i class="el-icon-chat-dot-round" style="color: white;"></i>
                        <span>评论</span>
                    </div>
                </div>
                <div class="commend-wrap">
                    <div class="commend-wrap-c">
                        <h1 class="c-title">Comment</h1>
                        <div class="commend-article">
                            <i class="el-icon-ship"></i>
                            <form class="comment">
                                <header class="article-t">
                                    <div class="hea-b">
                                        <button class="write">Write</button>
                                        <button class="preview">Preview</button>
                                    </div>
                                </header>
                                <div class="article-c">
                                    <textarea class="text" placeholder="Leave a comment" v-model="contents"></textarea>
                                </div>
                                <footer style="display: flex;flex-direction: row-reverse;">
                                    <el-button type="primary" round @click="Sh" v-if="Show">登录网易云</el-button>
                                    <el-button type="primary" round v-else @click="addcomments">评论</el-button>
                                </footer>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
           <div class="showcomment">
        <el-table :data="comments">
            <el-table-column label="内容" prop="content">
            </el-table-column>
            <el-table-column label="名字" prop="commentId">
            </el-table-column>
        </el-table>
        <div class="getmore" @click="getmore">加载更多</div>
           </div>
        </div>
    </div>
</template>


<script src="../assets/js/message.js">
</script>

<style src="../assets/css/message.css" scoped>

</style>