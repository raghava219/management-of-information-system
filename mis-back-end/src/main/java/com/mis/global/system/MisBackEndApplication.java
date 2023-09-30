package com.mis.global.system;

import com.mis.global.system.model.Company;
import com.mis.global.system.repository.CompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MisBackEndApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(MisBackEndApplication.class, args);
	}

	@Autowired
	private CompanyRepository cmpRepo;

	@Override
	public void run(String... args) throws Exception {


		Company cmp1 = new Company("HCL", 89900, 300, "Hyderabad");
		cmpRepo.save(cmp1);

		Company cmp2 = new Company("Infosys", 999900, 400, "Bangalore");
		cmpRepo.save(cmp2);

		Company cmp3 = new Company("TCS", 1099900, 400, "Hyderabad");
		cmpRepo.save(cmp3);
	}

}
