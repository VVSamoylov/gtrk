//package ru.tvsamara.staff.service.auth.impl;
//
//import java.util.HashSet;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import ru.tvsamara.staff.entity.auth.GTRKUser;
//import ru.tvsamara.staff.repository.auth.RoleRepository;
//import ru.tvsamara.staff.repository.auth.UserRepository;
//import ru.tvsamara.staff.service.auth.api.UserService;
//
///**
// *
// * @author venia
// */
//public class UserServiceImpl implements UserService {
//    @Autowired
//    private UserRepository userRepository;
//    @Autowired
//    private RoleRepository roleRepository;
//    @Autowired
//    private BCryptPasswordEncoder bCryptPasswordEncoder;
//
//    @Override
//    public void save(GTRKUser user) {
//        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
//        user.setRoles(new HashSet<>(roleRepository.findAll()));
//        userRepository.save(user);
//    }
//
//    @Override
//    public GTRKUser findByUsername(String username) {
//        return userRepository.findByGTRKUsername(username);
//    }
//}
