<template>
    <div class="chat container">
        <h2 class="center teal-text">LiveChat</h2>
        <div class="card">
            <div class="card-content">
                <ul class="messages">
                    <li> <!-- Every chat message will be under li tag -->
                        <span class="teal-text">Name</span>
                        <span class="grey-text text-darken-3">message</span>
                        <span class="grey-text text">time</span>
                    </li>
                </ul>
            </div>
            <div class="card-action">
                <NewMessage :name="name" /> // name binded, refered name from line 26
            </div>
        </div>
    </div>
</template>

<script>
import NewMessage from '@/components/NewMessage'

export default {
    name: 'Chat',
    props: ['name'],
    components: {
        NewMessage
    },

    data(){
        return {

        }
    }
}
</script>

<style>
.chat h2 {
    font-size: 2.6em;
    margin-bottom: 40px;
}
.chat span {
    font-size: 1.4em;
}
.chat .time {
    display: block;
    font-size: 1.2em;
}
</style>