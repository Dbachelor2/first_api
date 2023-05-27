import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectModel} from '@nestjs/mongoose'
import { UserSchema, User as UD } from './schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private UserRepository: Repository<User>, @InjectModel(UD.name) private UserModel : Model<UD>
  ) {}

  create(data) {
    //return this.UserRepository.find()
    const newUser = this.UserRepository.create({
      ...data,
      created_at: new Date(),
    });
    return this.UserRepository.save(newUser);
  }

  findAll(skip) {
    console.log('skip is', skip);
    return this.UserRepository.find({
      select: {
        username: true,
        email: true,
        created_at: true,
      },
      take: 1,
      skip: skip,
    });
  }

  findOne(id: number) {
    return this.UserRepository.findOne({
      where: {
        id: id,
      },
      select: {
        username: true,
        email: true,
      },
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async createUser(data): Promise<UD>{
    const userResource = new this.UserModel(data);
    return userResource.save();
  }

  async fetchUsers(): Promise<UD[]>{
    return this.UserModel.find().exec();
  }
}
