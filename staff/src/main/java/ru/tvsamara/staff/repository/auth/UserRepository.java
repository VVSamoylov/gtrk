package ru.tvsamara.staff.repository.auth;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import ru.tvsamara.staff.entity.auth.GTRKUser;

/**
 *
 * @author venia
 */
@Repository
public interface UserRepository extends JpaRepository<GTRKUser, Long> {
    @Query("select gu from GTRKUser gu where gu.username=?1")
  GTRKUser findByGTRKUsername(String name);   
}
