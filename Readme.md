# container: web
    From node
    VOLUME ~/project/iptime0628

    docker run -it --name web -v ~/project/iptime0628:/data -p 3000:3000 node bash
    
    cd data
    npm install
    npm start

# website  http://localhost:3000