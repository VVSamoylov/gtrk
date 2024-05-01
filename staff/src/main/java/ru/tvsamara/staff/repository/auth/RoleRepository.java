package ru.tvsamara.staff.repository.auth;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.tvsamara.staff.entity.auth.Role;

/**
 *
 * @author venia
 */
@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    
}
