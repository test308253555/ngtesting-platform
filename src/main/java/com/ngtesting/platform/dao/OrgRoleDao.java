package com.ngtesting.platform.dao;

import com.ngtesting.platform.model.TstOrgPrivilegeDefine;
import com.ngtesting.platform.model.TstOrgRole;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface OrgRoleDao {
    List<TstOrgPrivilegeDefine> queryByUser(Integer userId, Integer orgId);

    List<TstOrgRole> query(@Param("orgId") Integer orgId,
                           @Param("keywords") String keywords,
                           @Param("disabled") String disabled);

    TstOrgRole get(@Param("id") Integer id);
}
