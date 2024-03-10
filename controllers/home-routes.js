const router = require("express").Router();
const { Blog, Plant, User } = require("../models");
const withAuth = require("../utils/auth");
// const withAuth = require('../utils/auth');

router.get("/", (req, res) => {
  try {
    res.render("landing");
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/login", (req, res) => {
  try {
    res.render("login");
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/signup", (req, res) => {
  try {
    res.render("signup");
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/profile", withAuth, async (req, res) => {
  try {
    const dbUserData = await User.findByPk(req.session.user_id, {
      attributes: {exclude: ['password']}
    });
        
    if(dbUserData){
      const chosenUser = dbUserData.get({plain: true});
      res.render("profile", {
        chosenUser,
        logged_in: true
      });
  }
  else{
    res.render('landing');
  }

  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.get("/blogs", withAuth, async (req, res) => {
  try {
    const dbBlogData = await Blog.findAll({
      include: [
        {
          model: User,
          attributes: ['userName'],
        }
      ],
      order: [['createdAt', 'DESC']]
    });

    const allBlogs = dbBlogData.map((allBlogs) => allBlogs.get({plain: true}));
    // console.log(allBlogs);
    res.render('blogs',{
      allBlogs,
      logged_in: req.session.logged_in
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

////// the states routes   ////////////
router.get("/vic", withAuth, async (req, res) => {
  try {
    const dbAllPlantData = await Plant.findAll();
    const statePlants = dbAllPlantData
        .map((plant) => {
            const plantData = plant.get({ plain: true });
            // Initialize season flags for each plant
            plantData.spring = false;
            plantData.summer = false;
            plantData.winter = false;
            plantData.autumn = false;
            return plantData;
        }).filter((plant) => plant.plantLocation.includes("VIC"));
    
        // I had to do a loop in a loop to go over each spot in the season array individually
    statePlants.forEach(plant => {
      plant.plantSeason.forEach(season => {
        if (season === 'Spring') {
          plant.spring = true;
        } else if (season === 'Summer') {
          plant.summer = true;
        } else if (season === 'Winter') {
          plant.winter = true;
        } else if (season === 'Autumn') {
          plant.autumn = true;
        }
      });
    });
    res.render("vic", { statePlants,logged_in: req.session.logged_in });
} catch (error) {
    res.status(500).json(error);
}
});

router.get("/qld", withAuth, async (req, res) => {
  try {
    const dbAllPlantData = await Plant.findAll();
    const statePlants = dbAllPlantData
        .map((plant) => {
            const plantData = plant.get({ plain: true });
            // Initialize season flags for each plant
            plantData.spring = false;
            plantData.summer = false;
            plantData.winter = false;
            plantData.autumn = false;
            return plantData;
        }).filter((plant) => plant.plantLocation.includes("QLD"));
    // I had to do a loop in a loop to go over each spot in the season array individually

    statePlants.forEach(plant => {
      // console.log(plantSeasonArray);
      plant.plantSeason.forEach(season => {

        console.log('whatever');
        console.log('plant.plantSeason ',plant.plantSeason);
        if (season === 'Spring') {
          plant.spring = true;
        } else if (season === 'Summer') {
          plant.summer = true;
        } else if (season === 'Winter') {
          plant.winter = true;
        } else if (season === 'Autumn') {
          plant.autumn = true;
        }
      });
    });


    res.render("qld", { statePlants, logged_in: req.session.logged_in });
  } catch (error) {
      res.status(500).json(error);
  }
});

router.get("/sa", withAuth, async (req, res) => {
  try {
    const dbAllPlantData = await Plant.findAll();
    const statePlants = dbAllPlantData
        .map((plant) => {
            const plantData = plant.get({ plain: true });
            // Initialize season flags for each plant
            plantData.spring = false;
            plantData.summer = false;
            plantData.winter = false;
            plantData.autumn = false;
            return plantData;
        }).filter((plant) => plant.plantLocation.includes("SA"));
    // I had to do a loop in a loop to go over each spot in the season array individually

    statePlants.forEach(plant => {
      // console.log(plantSeasonArray);
      plant.plantSeason.forEach(season => {

        console.log('whatever');
        console.log('plant.plantSeason ',plant.plantSeason);
        if (season === 'Spring') {
          plant.spring = true;
        } else if (season === 'Summer') {
          plant.summer = true;
        } else if (season === 'Winter') {
          plant.winter = true;
        } else if (season === 'Autumn') {
          plant.autumn = true;
        }
      });
    });


    res.render("sa", { statePlants, logged_in: req.session.logged_in });
  } catch (error) {
      res.status(500).json(error);
  }
});


router.get("/wa", withAuth, async (req, res) => {
  try {
    const dbAllPlantData = await Plant.findAll();
    const statePlants = dbAllPlantData
        .map((plant) => {
            const plantData = plant.get({ plain: true });
            // Initialize season flags for each plant
            plantData.spring = false;
            plantData.summer = false;
            plantData.winter = false;
            plantData.autumn = false;
            return plantData;
        }).filter((plant) => plant.plantLocation.includes("WA"));
    // I had to do a loop in a loop to go over each spot in the season array individually

    statePlants.forEach(plant => {
      // console.log(plantSeasonArray);
      plant.plantSeason.forEach(season => {

        console.log('whatever');
        console.log('plant.plantSeason ',plant.plantSeason);
        if (season === 'Spring') {
          plant.spring = true;
        } else if (season === 'Summer') {
          plant.summer = true;
        } else if (season === 'Winter') {
          plant.winter = true;
        } else if (season === 'Autumn') {
          plant.autumn = true;
        }
      });
    });


    res.render("wa", { statePlants, logged_in: req.session.logged_in });
  } catch (error) {
      res.status(500).json(error);
  }
});

router.get("/nsw", withAuth, async (req, res) => {
  try {
    const dbAllPlantData = await Plant.findAll();
    const statePlants = dbAllPlantData
        .map((plant) => {
            const plantData = plant.get({ plain: true });
            // Initialize season flags for each plant
            plantData.spring = false;
            plantData.summer = false;
            plantData.winter = false;
            plantData.autumn = false;
            return plantData;
        }).filter((plant) => plant.plantLocation.includes("NSW"));
    // I had to do a loop in a loop to go over each spot in the season array individually

    statePlants.forEach(plant => {
      // console.log(plantSeasonArray);
      plant.plantSeason.forEach(season => {

        console.log('whatever');
        console.log('plant.plantSeason ',plant.plantSeason);
        if (season === 'Spring') {
          plant.spring = true;
        } else if (season === 'Summer') {
          plant.summer = true;
        } else if (season === 'Winter') {
          plant.winter = true;
        } else if (season === 'Autumn') {
          plant.autumn = true;
        }
      });
    });


    res.render("nsw", { statePlants, logged_in: req.session.logged_in });
  } catch (error) {
      res.status(500).json(error);
  }
});


router.get("/tas", withAuth, async (req, res) => {
  try {
    const dbAllPlantData = await Plant.findAll();
    const statePlants = dbAllPlantData
        .map((plant) => {
            const plantData = plant.get({ plain: true });
            // Initialize season flags for each plant
            plantData.spring = false;
            plantData.summer = false;
            plantData.winter = false;
            plantData.autumn = false;
            return plantData;
        }).filter((plant) => plant.plantLocation.includes("TAS"));
    // I had to do a loop in a loop to go over each spot in the season array individually

    statePlants.forEach(plant => {
      // console.log(plantSeasonArray);
      plant.plantSeason.forEach(season => {

        console.log('whatever');
        console.log('plant.plantSeason ',plant.plantSeason);
        if (season === 'Spring') {
          plant.spring = true;
        } else if (season === 'Summer') {
          plant.summer = true;
        } else if (season === 'Winter') {
          plant.winter = true;
        } else if (season === 'Autumn') {
          plant.autumn = true;
        }
      });
    });


    res.render("tas", { statePlants, logged_in: req.session.logged_in });
  } catch (error) {
      res.status(500).json(error);
  }
});

router.get("/act", withAuth, async (req, res) => {
  try {
    const dbAllPlantData = await Plant.findAll();
    const statePlants = dbAllPlantData
        .map((plant) => {
            const plantData = plant.get({ plain: true });
            // Initialize season flags for each plant
            plantData.spring = false;
            plantData.summer = false;
            plantData.winter = false;
            plantData.autumn = false;
            return plantData;
        }).filter((plant) => plant.plantLocation.includes("ACT"));
    // I had to do a loop in a loop to go over each spot in the season array individually

    statePlants.forEach(plant => {
      // console.log(plantSeasonArray);
      plant.plantSeason.forEach(season => {

        console.log('whatever');
        console.log('plant.plantSeason ',plant.plantSeason);
        if (season === 'Spring') {
          plant.spring = true;
        } else if (season === 'Summer') {
          plant.summer = true;
        } else if (season === 'Winter') {
          plant.winter = true;
        } else if (season === 'Autumn') {
          plant.autumn = true;
        }
      });
    });


    res.render("act", { statePlants, logged_in: req.session.logged_in });
  } catch (error) {
      res.status(500).json(error);
  }
});


router.get("/nt", withAuth, async (req, res) => {
  try {
    const dbAllPlantData = await Plant.findAll();
    const statePlants = dbAllPlantData
        .map((plant) => {
            const plantData = plant.get({ plain: true });
            // Initialize season flags for each plant
            plantData.spring = false;
            plantData.summer = false;
            plantData.winter = false;
            plantData.autumn = false;
            return plantData;
        }).filter((plant) => plant.plantLocation.includes("NT"));
    // I had to do a loop in a loop to go over each spot in the season array individually

    statePlants.forEach(plant => {
      // console.log(plantSeasonArray);
      plant.plantSeason.forEach(season => {

        console.log('whatever');
        console.log('plant.plantSeason ',plant.plantSeason);
        if (season === 'Spring') {
          plant.spring = true;
        } else if (season === 'Summer') {
          plant.summer = true;
        } else if (season === 'Winter') {
          plant.winter = true;
        } else if (season === 'Autumn') {
          plant.autumn = true;
        }
      });
    });


    res.render("nt", { statePlants, logged_in: req.session.logged_in });
  } catch (error) {
      res.status(500).json(error);
  }
});

/////////////////////////////////


// add a plant page
router.get("/addPlant", withAuth, (req, res) => {
  try {
    res.render("addPlant", {logged_in: req.session.logged_in});
  } catch (error) {
    res.status(500).json(error);
  }
});

////// the season routes   ////////////

// summer //
router.get("/summer", withAuth, async (req, res) => {
  try {
    const dbAllPlantData = await Plant.findAll();
    const seasonPlants = dbAllPlantData
        .map((plant) => {
            const plantData = plant.get({ plain: true });
            // Initialize state flags for each plant
            plantData.NSW = false;
            plantData.QLD = false;
            plantData.ACT = false;
            plantData.VIC = false;
            plantData.SA = false;
            plantData.WA = false;
            plantData.TAS = false;
            plantData.NT = false;
            return plantData;
        }).filter((plant) => plant.plantSeason.includes("Summer"));
    
        // Loop over each state individually
    seasonPlants.forEach(plant => {
      plant.plantLocation.forEach(location => {
        if (location === 'NSW') {
          plant.NSW = true;
        } else if (location === 'QLD') {
          plant.QLD = true;
        } else if (location === 'ACT') {
          plant.ACT = true;
        } else if (location === 'VIC') {
          plant.VIC = true;
        } else if (location === 'SA') {
          plant.SA = true;
        } else if (location === 'WA') {
          plant.WA = true;
        } else if (location === 'TAS') {
          plant.TAS = true;
        } else if (location === 'NT') {
          plant.NT = true;
        }
      });
    });
    res.render("summer", { seasonPlants, logged_in: req.session.logged_in });
} catch (error) {
    res.status(500).json(error);
}
});

// autumn //
router.get("/autumn", withAuth, async (req, res) => {
  try {
    const dbAllPlantData = await Plant.findAll();
    const seasonPlants = dbAllPlantData
        .map((plant) => {
            const plantData = plant.get({ plain: true });
            // Initialize state flags for each plant
            plantData.NSW = false;
            plantData.QLD = false;
            plantData.ACT = false;
            plantData.VIC = false;
            plantData.SA = false;
            plantData.WA = false;
            plantData.TAS = false;
            plantData.NT = false;
            return plantData;
        }).filter((plant) => plant.plantSeason.includes("Autumn"));
    
        // Loop over each state individually
    seasonPlants.forEach(plant => {
      plant.plantLocation.forEach(location => {
        if (location === 'NSW') {
          plant.NSW = true;
        } else if (location === 'QLD') {
          plant.QLD = true;
        } else if (location === 'ACT') {
          plant.ACT = true;
        } else if (location === 'VIC') {
          plant.VIC = true;
        } else if (location === 'SA') {
          plant.SA = true;
        } else if (location === 'WA') {
          plant.WA = true;
        } else if (location === 'TAS') {
          plant.TAS = true;
        } else if (location === 'NT') {
          plant.NT = true;
        }
      });
    });
    res.render("autumn", { seasonPlants, logged_in: req.session.logged_in });
} catch (error) {
    res.status(500).json(error);
}
});

// winter //
router.get("/winter", withAuth, async (req, res) => {
  try {
    const dbAllPlantData = await Plant.findAll();
    const seasonPlants = dbAllPlantData
        .map((plant) => {
            const plantData = plant.get({ plain: true });
            // Initialize state flags for each plant
            plantData.NSW = false;
            plantData.QLD = false;
            plantData.ACT = false;
            plantData.VIC = false;
            plantData.SA = false;
            plantData.WA = false;
            plantData.TAS = false;
            plantData.NT = false;
            return plantData;
        }).filter((plant) => plant.plantSeason.includes("Winter"));
    
        // Loop over each state individually
    seasonPlants.forEach(plant => {
      plant.plantLocation.forEach(location => {
        if (location === 'NSW') {
          plant.NSW = true;
        } else if (location === 'QLD') {
          plant.QLD = true;
        } else if (location === 'ACT') {
          plant.ACT = true;
        } else if (location === 'VIC') {
          plant.VIC = true;
        } else if (location === 'SA') {
          plant.SA = true;
        } else if (location === 'WA') {
          plant.WA = true;
        } else if (location === 'TAS') {
          plant.TAS = true;
        } else if (location === 'NT') {
          plant.NT = true;
        }
      });
    });
    res.render("winter", { seasonPlants, logged_in: req.session.logged_in });
} catch (error) {
    res.status(500).json(error);
}
});

// spring //
router.get("/spring", withAuth, async (req, res) => {
  try {
    const dbAllPlantData = await Plant.findAll();
    const seasonPlants = dbAllPlantData
        .map((plant) => {
            const plantData = plant.get({ plain: true });
            // Initialize state flags for each plant
            plantData.NSW = false;
            plantData.QLD = false;
            plantData.ACT = false;
            plantData.VIC = false;
            plantData.SA = false;
            plantData.WA = false;
            plantData.TAS = false;
            plantData.NT = false;
            return plantData;
        }).filter((plant) => plant.plantSeason.includes("Spring"));
    
        // Loop over each state individually
    seasonPlants.forEach(plant => {
      plant.plantLocation.forEach(location => {
        if (location === 'NSW') {
          plant.NSW = true;
        } else if (location === 'QLD') {
          plant.QLD = true;
        } else if (location === 'ACT') {
          plant.ACT = true;
        } else if (location === 'VIC') {
          plant.VIC = true;
        } else if (location === 'SA') {
          plant.SA = true;
        } else if (location === 'WA') {
          plant.WA = true;
        } else if (location === 'TAS') {
          plant.TAS = true;
        } else if (location === 'NT') {
          plant.NT = true;
        }
      });
    });
    res.render("spring", { seasonPlants, logged_in: req.session.logged_in });
} catch (error) {
    res.status(500).json(error);
}
});

///// end of season routes /////

module.exports = router;
