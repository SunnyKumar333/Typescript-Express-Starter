## Steps to setup project

1.clone the repo
```
git clone https://github.com/SunnyKumar333/Typescript-Express-Starter.git
```

# Eg. Code
```javascript
const projectName="Express Project";
function cloneProject(projectName){
    //code to clone project
    const context=github.context();
    github.clone(
            {
                projectname:projectName,
                context:context
            }
        );
}
cloneProject(projectName);
```
