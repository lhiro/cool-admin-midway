import { Provide } from '@midwayjs/decorator';
import { CoolController, BaseController } from '@cool-midway/core';
import { ContractListEntity } from '../../../entity/contract/list';
import { ContractService } from '../../../service/contract';

/**
 * 合同
 */
@Provide()
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: ContractListEntity,
  service: ContractService,
})
export class ContractController extends BaseController {}
