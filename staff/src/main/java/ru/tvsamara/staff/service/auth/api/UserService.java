package ru.tvsamara.staff.service.auth.api;

import ru.tvsamara.staff.entity.auth.GTRKUser;

/**
 *
 * @author venia
 */
public interface UserService {
    void save(GTRKUser user);
    GTRKUser findByUsername(String username);
}
