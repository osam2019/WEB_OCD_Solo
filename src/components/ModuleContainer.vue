<template>
    <div id="moduleContainer">
        <div v-if="isMain" id="main">
            <Header v-bind:user="user" @exitRoom="exitRoom"></Header>
            <Body v-bind:user="user" @tenMinRemaining="tenMinRemaining" @cleaningTimeEnd="cleaningTimeEnd"></Body>
            <Footer v-bind:user="user" v-bind:userList="userList" @editAreas="openEditAreas" @cleanerList="cleanerList"></Footer>
        </div>
        <div v-if="isAddRoom" id="addRoom">
            <AddRoom @enterRoom="enterRoom" @createRoom="createRoom"></AddRoom>
        </div>
        <div v-if="isCleanerList" id="cleanerList">
            <CleanerList v-bind:onlyTenMinutes="onlyTenMinutes" @back="back"></CleanerList>
        </div>
        <div v-if="isEditAreas" id="editArea">
            <EditAreas @editAreas="editAreas" @back="back"></EditAreas>
        </div>
    </div>
</template>

<script>
    import Header from '../components/components_main/Header';
    import Body from '../components/components_main/Body';
    import Footer from '../components/components_main/Footer';
    import AddRoom from '../views/AddRoom';
    import CleanerList from '../views/CleanerList';
    import EditAreas from '../views/EditAreas';
    export default {
        name: "ModuleContainer",
        components: {
            Header,
            Body,
            Footer, AddRoom, CleanerList, EditAreas
        },
        data() {
            return {
                isMain: false,
                isAddRoom: false,
                isCleanerList: false,
                isEditAreas: false,
                onlyTenMinutes: false
            }
        },
        props: ['user', 'userList'] ,
        created() {
            if(this.user.roomId === "") {
                this.showAddRoom();
            } else {
                this.showMain();
            }
        },
        methods: {
            resetFlags() {
                this.isMain = false;
                this.isAddRoom = false;
                this.isCleanerList = false;
                this.isEditAreas = false;
            },
            showMain() {
                this.isMain = true;
            },
            showAddRoom() {
                this.isAddRoom = true;
            },
            showCleanerList() {
                this.isCleanerList = true;
            },
            showEditAreas() {
                this.isEditAreas = true;
            },
            createRoom() {
                this.resetFlags();
                this.showEditAreas();
            },
            enterRoom(roomCode) {
                this.setRoomId(this.user.userId, roomCode);
                this.resetFlags();
                this.showMain();

            },
            exitRoom() {
                this.setRoomId(this.user.userId, '');
                this.resetFlags();
                this.showAddRoom();
            },
            setRoomId(userId, roomId) {
                for(let i = 0; i < this.userList.length; i++) {
                    if(this.userList[i].userId === userId) {
                        this.userList[i].roomId = roomId;
                    }
                }
                // eslint-disable-next-line no-console
                console.log(this.userList);
            },
            editAreas(roomName) {
                this.user.roomName = roomName;
                this.resetFlags();
                this.showMain();
            },
            back() {
                this.resetFlags();
                this.showMain();
            },
            cleanerList() {
                this.resetFlags();
                this.showCleanerList()
            },
            openEditAreas() {
                this.resetFlags();
                this.showEditAreas();
            },
            tenMinRemaining() {
                this.onlyTenMinutes = true;
            },
            cleaningTimeEnd() {
                this.onlyTenMinutes = false;
            }

        }
    }
</script>

<style scoped>

</style>