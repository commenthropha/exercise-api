console.log("This script populates some test exercises to the database.");

// Get arguments passed on the command line
const userArgs = process.argv.slice(2);

const mongoose = require("mongoose");
const Exercise = require("./models/exercise"); // Import the Exercise model

const exercises = []; // Create an array for exercises

const mongoDB = userArgs[0];

main().catch((err) => console.log(err));

async function main() {
  console.log("Debug: About to connect");
  await mongoose.connect(mongoDB);
  console.log("Debug: Should be connected?");
  await createExercises();
  console.log("Debug: Closing mongoose");
  mongoose.connection.close();
}

async function exerciseCreate(name, variation, muscles, cues, notes = []) {
  const exerciseDetail = {
    exercise_name: name,
    variation: variation,
    target_muscles: muscles,
    form_cues: cues,
    other_notes: notes,
  };

  const exercise = new Exercise(exerciseDetail);
  await exercise.save();
  exercises.push(exercise);
  console.log(`Added exercise: ${name}`);
}

async function createExercises() {
  console.log("Adding exercises");
  await Promise.all([
    exerciseCreate(
      "Bench Press",
      "Flat Barbell",
      ["Chest", "Triceps", "Front Deltoids"],
      [
        "Retract Scapula",
        "Push With Your Lats",
        "Engage Leg Drive",
        "Maintain A Tight Core",
      ],
      [
        "Ensure that you maintain a solid chain from the top of your body to the point where your feet are making contact with the ground.",
        "Try and be as explosive as possible on this movement.",
        "Pause at the bottom for warm up reps to ensure the chest is getting a sufficient stretch.",
      ]
    ),
    exerciseCreate(
      "Bench Press",
      "Incline Barbell",
      ["Upper Chest", "Triceps", "Front Deltoids"],
      [
        "Retract Scapula",
        "Push With Your Lats",
        "Engage Leg Drive",
        "Maintain A Tight Core",
      ],
      [
        "More an emphasis on getting a contraction than the flat bench variation.",
        "A 30 degree incline is the best for chest gains",
        "Ensure that you squeeze at the top and get a good stretch by pausing at the bottom.",
      ]
    ),
    exerciseCreate(
      "Bench Press",
      "Incline Smith Machine",
      ["Upper Chest", "Triceps", "Front Deltoids"],
      ["Slightly closer hand positioning width than when using a barbell"],
      [
        "Primary goal of this variation is to get a sick contraction",
        "A 30 degree incline is the best for chest gains",
        "Ensure pausing at the bottom and efficient eccentric control to maximise time under tension.",
      ]
    ),
    exerciseCreate(
      "Bench Press",
      "Flat Dumbbell",
      ["Chest", "Triceps", "Front Deltoids"],
      [
        "Retract Scapula",
        "Push With Your Lats",
        "Engage Leg Drive",
        "Maintain A Tight Core",
      ],
      [
        "Greater emphasis on the stabilising muscles than barbell bench press",
        "Far easier on the wrists than barbell bench press.",
        "Amazing for whenever you reach a plateau with your barbell bench press weight",
        "Can get far more ROM than when using a barbell so better for facilitating hypertrophy",
        "Ensure that dumbbells DO NOT touch at the top of the rep as to not take tension off the muscle.",
        "Pause at the bottom for warm up reps to ensure the chest is getting a sufficient stretch.",
      ]
    ),
    exerciseCreate(
      "Bench Press",
      "Incline Dumbbell",
      ["Upper Chest", "Triceps", "Front Deltoids"],
      [
        "Retract Scapula",
        "Push With Your Lats",
        "Engage Leg Drive",
        "Maintain A Tight Core",
      ],
      [
        "Particularly taxing on the front deloids compared to other bench movements",
        "A 30 degree incline is the best for chest gains",
        "Ensure that dumbbells DO NOT touch at the top of the rep as to not take tension off the muscle.",
        "Pause at the bottom for warm up reps to ensure the chest is getting a sufficient stretch.",
      ]
    ),
    exerciseCreate(
      "Chest Fly",
      "Machine",
      ["Chest"],
      [
        "Straighten your arms on the concentric",
        "Squeeze at the top",
        "Bend your elbows during the eccentric to reduce load on the biceps",
        "Ensure that you pause in the stretched and contracted position",
      ],
      [
        "The pause in the stretched position should be half the time of the pause in the contracted position to reduce load on deltoids and biceps.",
      ]
    ),
    exerciseCreate(
      "Tricep Pushdown",
      "Cable V-Bar",
      ["Triceps"],
      [
        "Keep your elbows close to your body",
        "'Lock' your elbows to ensure that they don't move throughout the motion",
        "Slight hip hinge for more range of motion",
        "Ensure that you squeeze in the contracted position to achieve maximum tricep activation",
      ]
    ),
    exerciseCreate(
      "Tricep Pushdown",
      "Cable Cross Body",
      ["Triceps"],
      [
        "'Lock' your elbows to ensure that they don't move throughout the motion",
        "Slight hip hinge for more range of motion",
        "Ensure that you squeeze in the contracted position to achieve maximum tricep activation",
      ],
      ["Focus on squeezing in the stretched position as much as possible"]
    ),
    exerciseCreate(
      "Bicep Curl",
      "Incline Bench Dumbbell",
      ["Biceps, Forearms"],
      [
        "'Lock' your elbows to ensure that they don't move throughout the motion",
        "Ensure that you get as much of a stretch as possible at the bottom",
        "No need to pause at the top as tension is at it's biomechanical maximum at 90 degrees",
      ],
      [
        "Amazing when supplemented with a drop set, halving the weight and going until muscular failure",
      ]
    ),
    exerciseCreate(
      "Reverse Wrist Curl",
      "Dumbbell",
      ["Forearms"],
      [
        "Ensure that the eccentric is controlled as much as possible to maximise time under tension",
        "Squeeze in the stretched position",
      ],
      ["Start with your left arm as it's the weaker arm"]
    ),
    exerciseCreate(
      "Pull-Up",
      "Wide Grip",
      ["Forearms, Brachialis, Lats, Teres, Rhomboids"],
      [
        "Aim to pull the bar to your chest instead of your chin",
        "Go all the way to the bottom of the rep",
        "Control your descent",
        "Explode on the concentric motion as much as possible",
        "Squeeze at the top",
      ],
      [
        "Better lat activation than neutral grip",
        "May find wide grip to be more taxing on the forearms than neutral grip due to the increase in grip demand",
        "Usually the better option unless there's a reason you have to do neutral grip",
      ]
    ),
    exerciseCreate(
      "Pull-Up",
      "Neutral Grip",
      ["Forearms", "Biceps", "Lats"],
      [
        "Go all the way to the bottom of the rep",
        "Control your descent",
        "Explode on the concentric motion as much as possible",
        "Squeeze at the top",
      ],
      [
        "May be easier than wide grip due to increased support from the biceps",
        "Slightly less comparative activation from the lats and teres muscles compared to wide grip",
      ]
    ),
    exerciseCreate(
      "Lat Pullover",
      "Straight Bar",
      ["Lats"],
      [
        "Avoid coming up too high during the eccentric motion (exceeding about 120 degrees) as this takes tension off of the lats",
        "Fixed hinge at the hips to allow for greater ROM",
        "Squeeze at the bottom",
      ],
      [
        "A good option for lat pre-exhaustion before a pulldown or pull-up exercise",
      ]
    ),
    exerciseCreate(
      "Lat Pulldown",
      "Neutral Grip",
      ["Forearms", "Biceps", "Lats"],
      [
        "Lean back slightly on the way down",
        "Control the eccentric",
        "Make sure to go all the way up with the weight",
        "Explode on the concentric motion as much as possible",
        "Squeeze at the bottom",
      ],
      [
        "Greater focus on the lats compared to wide grip",
        "Greater support from the biceps may facilitate a better mind-muscle connection for the lats",
        "Can afford to go heavier than the weight used for wide grip lat pulldowns",
      ]
    ),
    exerciseCreate(
      "Lat Pulldown",
      "Wide Grip",
      ["Forearms", "Brachialis", "Teres", "Rhomboids"],
      [
        "Lean back slightly on the way down",
        "Control the eccentric",
        "Make sure to go all the way up with the weight",
        "Explode on the concentric motion as much as possible",
        "Squeeze at the bottom",
      ],
      [
        "More focus on the upper back including the teres muscles, lower traps and rhomboids than the lats",
        "Typically benefits from a higher rep-range (in the 8-10 range) to ensure a better contraction at the bottom",
      ]
    ),
    exerciseCreate(
      "Machine Row",
      "Upper Grip",
      ["Forearms", "Brachialis", "Teres", "Rhomboids"],
      [
        "Ensure that you get a good stretch on the eccentric",
        "Don't stretch so much on the eccentric that you take tension off the back muscles",
        "Squeeze on the concentric and focus on the back muscles",
      ],
      [
        "More focus on the upper back including the teres muscles, lower traps and rhomboids than the lats",
        "Typically benefits from a higher rep-range (in the 8-10 range) to ensure a better contraction",
      ]
    ),
    exerciseCreate(
      "Machine Row",
      "Lower Grip",
      ["Forearms", "Brachialis", "Lats"],
      [
        "Ensure that you get a good stretch on the eccentric",
        "Don't stretch so much on the eccentric that you take tension off the back muscles",
        "Squeeze on the concentric and focus on the lats",
      ],
      [
        "More focus on the mid back including the lats",
        "Typically benefits from a higher rep-range (in the 8-10 range) to ensure a better contraction",
      ]
    ),
    exerciseCreate(
      "Cable Row",
      "V-Grip",
      ["Forearms", "Lats"],
      [
        "Allow yourself to lean forward slightly during the eccentric to get full ROM on the lats",
        "Roll your shoulders back to ensure tension remains on the lats",
        "Pull towards your belly and not your chest",
        "Squeeze on the concentric",
      ],
      [
        "Can afford to go heavier on this movement as opposed to machine rows",
        "Aim for the 4-6 rep range while mitigating form breakdown at all times",
      ]
    ),
    exerciseCreate(
      "Face Pulls",
      "Rotator Cuff Focused",
      ["Rotator Cuff", "Rear Deltoids", "Teres", "Lower Traps", "Rhomboids"],
      [
        "Place the rope as high as possible",
        "Hands should 'beat the race' to get to the back compared to the elbows",
        "Primary focus should be on external rotation",
      ],
      [
        "Aim of this variation of face pulls is to strengthen the rotator cuffs",
        "Try to aim for a fairly high rep range on this movement, about 10-15 reps",
      ]
    ),
    exerciseCreate(
      "Rear Delt Flys",
      "Cross Cable",
      ["Rear Deltoids"],
      [
        "Ensure that you pull at a 45-degree angle as this aligns with the fibers of the rear delt muscles",
        "Keep your arms straight throughout the movement to prevent the load from being exerted onto the triceps",
        "Stand upright and engage glutes and abs to keep your body stable",
      ], 
      [
        "This exercise benefits from a drop set to failure to isolate and fatigue the side deltoid",
      ]
    ),
    exerciseCreate(
      "Landmine Press",
      "Barbell",
      ["Deltoids", "Rotator Cuff"],
      [
        "Lean forward as you push to emulate a conventional overhead press",
        "Initiate the push using your deltoids and not by using momentum",
        "Pause at the bottom to prevent yourself from using momentum to use the weight",
      ]
    ),
    exerciseCreate(
      "Side Delt Raise",
      "Cable",
      ["Side Deltoids"],
      [
        "Try to stand as straight as possible with a slight lean, if at all",
        "Ensure form is kept strict by not using momentum to swing the weight up",
        "Control the eccentric to maximize time under tension",
        "Have a very short pause at the bottom to reset the rep and eliminate momentum as a factor",
      ],
      [
        "This exercise benefits from a drop set to failure to isolate and fatigue the side deltoid",
      ]
    ),
    exerciseCreate(
      "Squat",
      "Barbell",
      ["Quadriceps", "Hamstrings", "Glutes"],
      [
        "Go as deep as possible, MAKE SURE you're not cheating out on depth",
        "Pause for a second or so at the bottom to work the quadricep in the bottom position and to control the rep",
        "Explode on the way up but ensure that knees do not buckle and form does not break down",
        "As Tom Platz says, 'it's like jumping in water'",
      ],
      [
        "Biggest issue with squats is the tendency to pause so much between reps due to how fatiguing it is, so try and get over that mental barrier",
        "If you can't go deep enough with a weight or pause then the weight is too heavy, aim for a solid 4-6 reps on each set with PERFECT form",
        "This movement will benefit from a few warm up sets primarily to remind yourself of the form and ensure that you don't perform the exercise incorrectly",
    ]
    ),
    exerciseCreate(
        "Squat",
        "Smith Machine",
        ["Quadriceps", "Hamstrings", "Glutes"],
        [
          "Place feet slightly further forward to account for the fixed bar path, almost emulating a hack squat",
          "Because of the fixed bar path, you can afford to go far deeper than standard barbell squats",
          "Pause for a second or so at the bottom to work the quadricep in the bottom position and to control the rep",
          "Explode on the way up but ensure that knees do not buckle and form does not break down",
        ],
        [
          "Really work on going deep with these squats, almost ass to grass",
      ]
      ),
      exerciseCreate(
        "Romanian Deadlift",
        "Barbell",
        ["Hamstrings", "Lower Back", "Glutes"],
        [
          "Initiate the descent by hinging at the hips",
          "All movement including knee flexion should come naturally as a result of the hip hinge",
          "Ensure that spine is neutral by keeping your line of sight in line with your movement",
          "Make sure that your upper back is not bending whatsoever especially towards the end of the movement",
          "Brace your core before initiating the descent to ensure your spine is aligned properly",
          "Really take it slow on the eccentric",
          "Thrust as hard as possible on the concentric",
        ],
        [
          "This movement will benefit from a few warm up sets primarily to remind yourself of the form and ensure that you don't perform the exercise incorrectly",
      ]
      ),
      exerciseCreate(
        "Romanian Deadlift",
        "Smith Machine",
        ["Hamstrings", "Lower Back", "Glutes"],
        [
          "Place feet slightly further forward to distribute the weight",
          "Initiate the descent by hinging at the hips",
          "All movement including knee flexion should come naturally as a result of the hip hinge",
          "Ensure that spine is neutral by keeping your line of sight in line with your movement",
          "Make sure that your upper back is not bending whatsoever especially towards the end of the movement",
          "Brace your core before initiating the descent to ensure your spine is aligned properly",
          "Really take it slow on the eccentric",
          "Thrust as hard as possible on the concentric",
        ],
        [
          "This movement will benefit from a few warm up sets primarily to remind yourself of the form and ensure that you don't perform the exercise incorrectly",
      ]
      ),
      exerciseCreate(
        "Leg Extension",
        "Machine",
        ["Quadriceps"],
        [
          "Explode on the concentric",
          "Squeeze at the top",
          "Control the eccentric to maximise time under tension",
          "Try to prevent the stack from dropping to avoid tension from being taken off the muscle"
        ],
        [
            "This exercise benefits from a drop set to failure to isolate and fatigue the quadriceps",
          ]
      ),
      exerciseCreate(
        "Hamstring Curls",
        "Lying Machine",
        ["Hamstrings"],
        [
            "Explode on the concentric",
            "Squeeze at the top",
            "Control the eccentric to maximise time under tension",
            "Try to prevent the stack from dropping to avoid tension from being taken off the muscle"
          ],
        [
            "This exercise benefits from a drop set to failure to isolate and fatigue the hamstrings",
        ]
      ),
      exerciseCreate(
        "Calf Raises",
        "Leg Press Machine",
        ["Calves"],
        [
            "Deep stretch and the bottom and hold a solid 3 seconds",
            "Explode on the concentric and don't pause at the top",
            "Really control the eccentric leading into the deep stretch at the bottom",
          ],
        [
            "Holding in the stretched position is the secret to calf growth according to Dr Mike Israetel",
        ]
      ),
  ]);
}
