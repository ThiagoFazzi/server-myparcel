//get label
import 'reflect-metadata'
import { JsonController, Get, NotFoundError, Param, HttpCode} from 'routing-controllers';
import { printLabels, countLabels, AxiosAuth, getShipments } from '../myparcel/controller';
// import Comment from './entity';

@JsonController()
export default class AlexaController {

  @Get('/labels/:date')
  @HttpCode(200)
    allLabels(
    @Param('date') date: String
    ) {
        return printLabels(date)
        .then( resp => resp)
  }

  @Get('/')
  welcome() {
    return countLabels()
    .then(res => res)
  }

    // @Get('/comments/:id')
    // getComment(
    //     @Param('id') id: number
    // ) {
    //     return Comment.findOne(id)
    // }

}