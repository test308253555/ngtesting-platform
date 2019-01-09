package com.ngtesting.platform.service.impl;

import com.alibaba.fastjson.JSONObject;
import com.ngtesting.platform.config.AppLaunch;
import com.ngtesting.platform.model.TstOrgGroupUserRelation;
import com.ngtesting.platform.model.TstUser;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.*;


/**
 * @author ：zhaofengjun@zhuge.com
 * @date ：2019/1/9 下午4:46
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = AppLaunch.class, webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT)
@ComponentScan(basePackages = "com.ngtesting.platform")
public class AccountServiceImplTest {

    @Autowired
    private AccountServiceImpl accountService;

    @Autowired
    private UserServiceImpl userService;

    /**
     * 快速注册用户
     */
    @Test
    public void register() {

        // 注册时需注释application.yml 中的server.servlet 配置

        // 测试组用户邮箱
        Set<String> qaList = new HashSet<>();
        qaList.add("ella");
        qaList.add("wanghaiyang");
        qaList.add("wangyanxia");
        qaList.add("xiemeng");
        qaList.add("zhufangxu");
        qaList.add("mengdebin");
        qaList.add("wangqian");
        qaList.add("zhukunzhan");
        qaList.add("liumingyan");
        qaList.add("mengfanyong");
        qaList.add("yanshuanghua");
        qaList.add("yudehui");
        qaList.add("yangxiaorui");
        qaList.add("baidongyang");
        qaList.add("dingjing");
        qaList.add("xingdanna");
        qaList.add("liuyongkun");

        for (String qa : qaList) {
            System.out.println("用户注册：" + qa);
            TstUser tstUser = new TstUser();
            tstUser.setNickname(qa);
            tstUser.setEmail(qa + "@zhuge.com");
            tstUser.setPassword("111111");
            tstUser.setPhone("18511111111");
            accountService.register(tstUser);

        }


        //System.out.println("aaaaaaa");
    }


    /**
     * 邀请用户到组
     */
    @Test
    public void invite(){

        // 测试组用户邮箱
        Set<String> qaList = new HashSet<>();
        //qaList.add("ella");
        //qaList.add("wanghaiyang");
        qaList.add("wangyanxia");
        qaList.add("xiemeng");
        qaList.add("zhufangxu");
        qaList.add("mengdebin");
        qaList.add("wangqian");
        qaList.add("zhukunzhan");
        qaList.add("liumingyan");
        qaList.add("mengfanyong");
        qaList.add("yanshuanghua");
        qaList.add("yudehui");
        qaList.add("yangxiaorui");
        qaList.add("baidongyang");
        qaList.add("dingjing");
        qaList.add("xingdanna");
        qaList.add("liuyongkun");

        // 邀请到qa组
        TstUser tstUser = userService.getByEmail("qa@zhuge.com");

        LinkedHashMap<String,Object> map = new LinkedHashMap<>();
        map.put("orgId","60");
        map.put("orgGroupId","103");
        map.put("orgGroupName","qa组");
        map.put("selected",false);
        map.put("selecting",false);
        JSONObject json = new JSONObject();
        json.put("relations",map);

        List<TstOrgGroupUserRelation> relations = (List<TstOrgGroupUserRelation>) json.get("relations");
        System.out.println(relations);
        for(String user: qaList){
            TstUser vo = userService.getByEmail(user+"@zhuge.com");

            //userService.invite(tstUser,vo,relations);

        }


        try{}catch (Exception e){}


    }

}