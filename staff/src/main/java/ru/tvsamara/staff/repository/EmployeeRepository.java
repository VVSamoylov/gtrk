package ru.tvsamara.staff.repository;

import java.util.List;
import java.util.Optional;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import ru.tvsamara.staff.entity.Employee;

/**
 *
 * @author venia
 */
@Repository
public interface EmployeeRepository extends CrudRepository<Employee, Long> {
    @Override
    public Employee save(Employee entity);
    
    @Override
    public Optional<Employee> findById(Long id);

    @Override
    public boolean existsById(Long id);

    @Override
    public Iterable<Employee> findAll();

    @Override
    public Iterable<Employee> findAllById(Iterable<Long> ids);

    @Override
    public long count();

    @Override
    public void deleteById(Long id);

    @Override
    public void delete(Employee entity);
    
    /**
     *удаление
     */
    @Override
    public void deleteAll();
}
