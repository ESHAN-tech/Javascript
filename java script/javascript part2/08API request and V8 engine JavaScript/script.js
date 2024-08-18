 /*

        UNSENT  =	Client has been created. open() not called yet.
        OPENED  =	open() has been called.
        HEADERS_RECEIVED =	send() has been called, and headers and status are available.
        LOADING  =	Downloading; responseText holds partial data.
        DONE =	The operation is complete.

        purane time me ham log xml se he request bheja kerte thay
        yaha jo xml request send kerte hai wo ajax k form diya jaata hai

 */

        const requesturl = 'https://api.github.com/user/ankitpathak62'
        const xhr = new XMLHttpRequest()
        xhr.open('GET' , requesturl)
        xhr.send()
        console.log("hello");
        
        console.log(xhr.readyState)// here we get 1 bcoz open value is 1 or sare method value me hai 
        xhr.onreadystatechange = function(){
            console.log(xhr.readyState);
            if(xhr.readyState === 4 ){
                const data = JSON.parse(this.responseText);
                console.log(typeof data);
                console.log(data.name);
            }
        };
        xhr.send();
        //here we get 2,3,4 ,jaise state change waise function change,yaha 1st state k baad ka be track ho rha h
    
    