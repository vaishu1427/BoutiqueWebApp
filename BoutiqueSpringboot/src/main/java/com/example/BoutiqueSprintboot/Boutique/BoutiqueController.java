package com.example.BoutiqueSprintboot.Boutique;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("api/v1/root")

public class BoutiqueController {
    @Autowired
    BoutiqueRepository boutiquerepo;

    @PostMapping(path="/add")
    String adddata(@RequestBody Boutique newdata){
        boutiquerepo.save(newdata);
        return "saved";
    }
}
