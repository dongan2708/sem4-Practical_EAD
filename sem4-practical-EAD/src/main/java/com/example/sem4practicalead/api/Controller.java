package com.example.sem4practicalead.api;

import com.example.sem4practicalead.entity.Loan;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/controllers")
public class Controller {

    @RequestMapping(method = RequestMethod.POST, path = "totalLoan")
    public ResponseEntity<?> calculateLoan(@RequestBody Loan loan){
        double loan1 = loan.getLoan();
        double rate = loan.getRate()/100;
        double term = loan.getTerm();
        double totalLoan = loan1 * rate * (Math.pow((1+rate),term)/(Math.pow((1+rate),term) - 1)) * 1/12;
        return new ResponseEntity<>(totalLoan, HttpStatus.OK);
    }


}
