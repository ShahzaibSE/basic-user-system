import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';

@Schema()
export class User extends SchemaFactory {
  @Prop({
    required: true,
  })
  firstname: string;

  @Prop({
    required: true,
  })
  lastname: string;

  @Prop({
    required: true,
  })
  email: string;

  @Prop({
    required: true,
  })
  password: string;

  @Prop({
    required: true,
  })
  createdAt: Date;

  @Prop()
  updatedAt?: Date;
}
