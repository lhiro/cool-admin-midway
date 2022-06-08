import { Provide, Inject } from '@midwayjs/decorator';
import { BaseService } from '@cool-midway/core';
import { InjectEntityModel } from '@midwayjs/orm';
import { Repository } from 'typeorm';
import { ContractListEntity } from '../../entity/contract/list';
import { Context } from '@midwayjs/koa';

/**
 * 描述
 */
@Provide()
export class ContractService extends BaseService {
  @InjectEntityModel(ContractListEntity)
  contractListEntity: Repository<ContractListEntity>;

  @Inject()
  ctx: Context;
}
