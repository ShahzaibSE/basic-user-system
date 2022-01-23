import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
// Model.
import { UserDocument, User } from './schemas/user.schema';
// DTO.
import { CreateUserDTO } from './dto/create-dto.dto';
import { UpdateUserDTO } from './dto/update-dto.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly model: Model<UserDocument>,
  ) {}
  //
  async findAll(): Promise<User[]> {
    return await this.model.find().exec();
  }
  //
  async findOne(id: string): Promise<User> {
    return await this.model.findById(id).exec();
  }
  //
  async create(createUserDTO: CreateUserDTO): Promise<User> {
    return await new this.model({
      ...createUserDTO,
      createdAt: new Date(),
    }).save();
  }
  //
  async update(updateUserDTO: UpdateUserDTO, id: string): Promise<User> {
    return await this.model.findByIdAndUpdate(id, updateUserDTO).exec();
  }
  //
  async delete(id: string): Promise<User> {
    return await this.model.findByIdAndDelete(id).exec();
  }
  //
  async findUser(email: string): Promise<User> {
    return await this.model.findOne({ email });
  }
}
