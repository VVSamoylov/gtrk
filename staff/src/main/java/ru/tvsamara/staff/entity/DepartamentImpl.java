
package ru.tvsamara.staff.entity;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import ru.tvsamara.staff.API.Departament;

/**
 * Отдел (Подразделение)
 * @author venia
 */
@Entity
@Table(name="departament")
public class DepartamentImpl implements Departament{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public Long getId() {
        return id;
    }

    @Override
    public void setId(Long id) {
        this.id = id;
    }
    private String depName;
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "BOSS_ID", nullable = true)
    private EmployeeImpl boss;

    @Override
    public String getDepName() {
        return depName;
    }

    @Override
    public void setDepName(String depName) {
        this.depName = depName;
    }

    @Override
    public EmployeeImpl getBoss() {
        return boss;
    }

    @Override
    public void setBoss(EmployeeImpl boss) {
        this.boss = boss;
    }
}
