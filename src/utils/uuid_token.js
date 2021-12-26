import { v4 as uuidv4 } from 'uuid';
// 游客登陆的 uuid
export const getUuid = () => {
    // 从本地获取uuid_token
    let uuid_token = localStorage.getItem('UUIDTOKEN');
    // 如果不存在就重新生成 =---后期不会改变
    if(!uuid_token){
        uuid_token=uuidv4();
        // 并存在本地
        localStorage.setItem('UUIDTOKEN',uuid_token);
    }

    // 返回 uuid
    return uuid_token;
}