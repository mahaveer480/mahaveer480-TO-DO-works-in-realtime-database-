
function updateDay() {
    const temp = new Date();
    // Get the abbreviated weekday
    const options = {
        weekday: 'long', // 'long' gives full name like "Friday"
        year: 'numeric',
        month: 'long', // 'long' gives full month name like "November"
        day: 'numeric',
     
    };    const formattedDay = temp.toLocaleString('en-US', options);
    document.getElementById('todaydate').innerText = formattedDay;
}
updateDay()


var maindiv=document.getElementById("maindiv")
var inputs =document.getElementById("newinputs")
var inputs1 =document.getElementById("newinputs1")

const newtask=()=>{
inputs.style.display="block"
maindiv.style.display="none"
}

const back=()=>{

    inputs.style.display="none"
    maindiv.style.display="block"


}    






var userId =  Math.random().toString(36).substring(2, 11);
const save=()=>{
    var taskName=document.getElementById("taskName").value
    var Descripition=document.getElementById("Descripition").value
    var date=document.getElementById("date").value
    
    
    function writeUserData(userId, taskName, Descripition, date) {
        
        console.log('User ID:', userId);
        console.log('Task Name:', taskName);
        console.log('Descripition:', Descripition);
        console.log('Date:', date);
        
        firebase.database().ref('users/' + userId).set({
            taskName: taskName,
            Descripition: Descripition,
            date: date,
            userId:userId
        })
        .then(() => {
            console.log('Data saved successfully.');
        })
        .catch((error) => {
            console.error('Error saving data: ', error);
        });
        
        inputs.style.display="none"
        maindiv.style.display="block"
        
    }
    
    writeUserData(userId, taskName, Descripition, date)
    window.location.reload()
}




















// const edit=()=>{
    
    

//         var taskName1=document.getElementById("taskName").value
//         var Descripition1=document.getElementById("Descripition").value
//         var date1=document.getElementById("date").value
//      console.log(taskName1)
        
        
//         function writeUserData1(userId, taskName1, Descripition1, date1) {
            
//             console.log('User ID:', userId);
//             console.log('Task Name:', taskName1);
//             console.log('Descripition:', Descripition1);
//             console.log('Date:', date1);
            
//             firebase.database().ref('users/' + userId).set({
//                 taskName: taskName1,
//                 Descripition: Descripition1,
//                 date: date1,
//                 userId:userId
//             })
//             .then(() => {
//                 console.log('Data saved successfully.');
//             })
//             .catch((error) => {
//                 console.error('Error saving data: ', error);
//             });
            
//             // inputs1.style.display="none"
//             // maindiv.style.display="block"
            
    
    
            
//             // const dbRef = firebase.database().ref();
          
            
    
//         }
//         writeUserData1(userId, taskName1, Descripition1, date1)
//         // window.location.reload()
    
    

  
    
// }    



const ivz  = async () => {
    try {
        const dbRef = firebase.database().ref('users');
        const snapshot = await dbRef.once('value');

        // Clear existing boxes if necessary
        const gigdivz = document.getElementById('gigdivz');
        gigdivz.innerHTML = '';
        
        snapshot.forEach((childSnapshot) => {
            const data = childSnapshot.val();
            createEntryBox(data.userId, data.taskName, data.Descripition, data.date);
        });
    } catch (error) {
        console.error("Error loading data:", error);
    }
};
const createEntryBox = (userId, taskName, description, date) => {
    const gigDiv = document.createElement('div');
    gigDiv.id = 'gigdiv';





       
       
       
       // Validation: Check if taskName, description, or date is empty
       if (!taskName || !description || !date) {
           gigDiv.style.display = 'none'; // Hide gigDiv if any field is empty
           var taskRef = database.ref("users/" + userId ); // Adjust the path based on your structure
           taskRef.remove()
           return; // Exit the function early
        }
        
        const article = document.createElement('article');
        article.id = 'h4div';
        
        const contentDiv = document.createElement('div');
        const title = document.createElement('h5');
        title.textContent = taskName;
        
        const descriptionPara = document.createElement('p');
    descriptionPara.textContent = description;

    contentDiv.appendChild(title);
    contentDiv.appendChild(descriptionPara);

    // Create checkbox div
    const checkboxDiv = document.createElement('div');
    checkboxDiv.id = 'checkboxDiv';
    const tickImage = document.createElement('img');
    tickImage.src = './assest/blue tic button.png'; // Fixed path typo
    tickImage.addEventListener('click', () => {
       title.style.textDecoration="line-through"
       title.style.fontWeight="900"

    });
    tickImage.alt = 'Tick icon';
    tickImage.style.height = '30px';
    checkboxDiv.appendChild(tickImage);

    // Append content to article
    article.appendChild(contentDiv);
    article.appendChild(checkboxDiv);
    gigDiv.appendChild(article);

    // Create horizontal line
    const hr = document.createElement('hr');
    gigDiv.appendChild(hr);

    // Create last div for date and buttons
    const lastDiv = document.createElement('div');
    lastDiv.id = 'lastdiv';

    // Create date/time display
    const dateTimeDiv = document.createElement('div');
    const dateTimeBold = document.createElement('b');
    dateTimeBold.id = 'date-time';
    dateTimeBold.textContent = date; // Set the date here
    dateTimeDiv.appendChild(dateTimeBold);
    lastDiv.appendChild(dateTimeDiv);

    // Create buttons
    const buttonsDiv = document.createElement('div');
    buttonsDiv.id = 'buttons';

    const editButton = document.createElement('button');
    editButton.id = 'Edit';
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => {
       
    });

    const deleteButton = document.createElement('button');
    deleteButton.id = 'Delete';
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        // Delete logic here
        console.log(`Deleting task: ${taskName}`);
        gigDiv.remove(); // Remove the task entry
    });

    buttonsDiv.appendChild(editButton);
    buttonsDiv.appendChild(deleteButton);
    lastDiv.appendChild(buttonsDiv);
    gigDiv.appendChild(lastDiv);
    
    // Append to main container
    document.getElementById('gigdivz').appendChild(gigDiv); // Ensure 'gigdivz' exists



    // Event listeners for buttons
    editButton.addEventListener('click', function() {

        // alert(userId)
        const dbRef = firebase.database().ref();
        dbRef.child("users").child(userId).get().then((snapshot) => {
          if (snapshot.exists()) {
            console.log(snapshot.val());
            var taskNameValue = snapshot.val().taskName; 
                    var descriptionValue = snapshot.val().Descripition; 
        var dateValue = snapshot.val().date; 

     






        document.getElementById("taskName").value = taskNameValue;
        document.getElementById("Descripition").value = descriptionValue;
        document.getElementById("date").value = dateValue;
            



        } else {
            console.log("No data available");
          }
        }).catch((error) => {
          console.error(error);
        });
        
        
        
        const element = document.getElementById('newinputs');
        if (element) {
            element.style.display="block" // or whatever style you're trying to change
        } else {
            console.error('Element not found');
        }
        if(userId===undefined){
            
            var taskRef = database.ref("users/" +undefined ); // Adjust the path based on your structure
            taskRef.remove()
            
        }
        element.style.display="block"
        
        maindiv.style.display="none"
        var taskName=document.getElementById("taskName").value
        var Descripition=document.getElementById("Descripition").value
        var date=document.getElementById("date").value
        
        var update={
            
            taskName: taskName,
            Descripition: Descripition,
            date: date
        }    
        database.ref("users/"+userId).update(update)
    });    
    
    deleteButton.addEventListener('click', function() {
  
   var conorm= confirm("Do you want to delelte data")
if(conorm===true){

    var taskRef = database.ref("users/" + userId ); // Adjust the path based on your structure
    taskRef.remove()
        .then(function() {
window.location.reload()

        })
        .catch(function(error) {
            alert("Error deleting task: " + error.message);
        });
}
else{alert("data is not deleted")}
window.location.reload()








});

    
    
};    



window.onload =ivz;