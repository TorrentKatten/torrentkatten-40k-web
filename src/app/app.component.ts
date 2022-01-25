import { Component } from '@angular/core';
import { FourtyKServiceClient } from './FourtykServiceClientPb'
import { GameDTO } from './fourtyk_pb.d'
import * as fourtyk_pb from "./fourtyk_pb";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export
class AppComponent {
  title = 'torrentkatten-40k-web';
}

var echoService = new FourtyKServiceClient('http://localhost:8080');


const request = new fourtyk_pb.GameDTO()
request.setName("test")


var metadata = {'custom-header-1': 'value1'};
echoService.createGame(request, metadata, function(err, response) {
  if (err) {
    console.log(err.code);
    console.log(err.message);
  } else {
    console.log(response.getUuid());
  }
});
