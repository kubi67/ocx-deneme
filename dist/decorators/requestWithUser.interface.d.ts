import { Request } from 'express';
import { User } from 'src/models/users/user.entity';
interface RequestWithUser extends Request {
    user: User;
}
export default RequestWithUser;
