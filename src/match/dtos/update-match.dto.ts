import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CreateMatchDto } from './create-match.dto';

export class UpdateMatchDto extends PartialType(
  OmitType(CreateMatchDto, ['id']),
) {}
