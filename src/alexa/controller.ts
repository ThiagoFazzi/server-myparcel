//get label
import { JsonController, Get} from 'routing-controllers';
import { printLabels } from '../myparcel/controller'
// import Comment from './entity';

@JsonController()
export default class AlexaController {

    @Get('/labels')
     allLabels() {
        return printLabels()
    }

    // @Get('/comments/:id')
    // getComment(
    //     @Param('id') id: number
    // ) {
    //     return Comment.findOne(id)
    // }

}