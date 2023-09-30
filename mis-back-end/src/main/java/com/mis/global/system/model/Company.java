package com.mis.global.system.model;

import jakarta.persistence.*;

@Entity
@Table(name="company")
public class Company {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name="company_name")
    private String cmpName;

    @Column(name="revenue")
    private double revenue;

    @Column(name="employees")
    private int employees;

    @Column(name="address")
    private String address;

    public Company() {

    }

    public Company(String cmpName, double revenue, int employees, String address) {
        super();
        this.cmpName = cmpName;
        this.revenue = revenue;
        this.employees = employees;
        this.address = address;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getCmpName() {
        return cmpName;
    }

    public void setCmpName(String cmpName) {
        this.cmpName = cmpName;
    }

    public double getRevenue() {
        return revenue;
    }

    public void setRevenue(double revenue) {
        this.revenue = revenue;
    }

    public int getEmployees() {
        return employees;
    }

    public void setEmployees(int employees) {
        this.employees = employees;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}
