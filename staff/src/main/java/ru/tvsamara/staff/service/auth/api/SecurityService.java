package ru.tvsamara.staff.service.auth.api;

/**
 *
 * @author venia
 */
public interface SecurityService {
    String findLoggedInUsername();
    void autoLogin(String username, String password);
}
