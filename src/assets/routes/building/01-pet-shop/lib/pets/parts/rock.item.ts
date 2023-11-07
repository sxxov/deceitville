import rock_item_bin from './rock.item.bin?url';

import Rock_Normal_s_jpg from './Rock_Normal-s.jpg?url';

import Rock_cold_Albedo_jpg from './Rock-cold_Albedo.jpg?url';

import Rock_Roughness_png from './Rock_Roughness.jpg?url';



export default {

	asset: {

		generator: 'Khronos glTF Blender I/O v3.6.27',

		version: '2.0',

	},

	extensionsUsed: ['KHR_draco_mesh_compression'],

	extensionsRequired: ['KHR_draco_mesh_compression'],

	scene: 0,

	scenes: [

		{

			name: 'Scene',

			nodes: [0],

		},

	],

	nodes: [

		{

			mesh: 0,

			name: 'rock.item',

			translation: [0, 1, 0],

		},

	],

	materials: [

		{

			doubleSided: true,

			name: 'Rock',

			normalTexture: {

				index: 0,

				texCoord: 1,

			},

			pbrMetallicRoughness: {

				baseColorTexture: {

					index: 1,

					texCoord: 1,

				},

				metallicFactor: 0,

				metallicRoughnessTexture: {

					index: 2,

					texCoord: 1,

				},

			},

		},

	],

	meshes: [

		{

			name: 'Icosphere',

			primitives: [

				{

					attributes: {

						POSITION: 0,

						NORMAL: 1,

						TEXCOORD_0: 2,

						TEXCOORD_1: 3,

					},

					extensions: {

						KHR_draco_mesh_compression: {

							bufferView: 0,

							attributes: {

								POSITION: 0,

								NORMAL: 1,

								TEXCOORD_0: 2,

								TEXCOORD_1: 3,

							},

						},

					},

					indices: 4,

					material: 0,

					mode: 4,

				},

			],

		},

	],

	textures: [

		{

			sampler: 0,

			source: 0,

		},

		{

			sampler: 0,

			source: 1,

		},

		{

			sampler: 0,

			source: 2,

		},

	],

	images: [

		{

			mimeType: 'image/jpeg',

			name: 'Rock_Normal-s',

			uri: Rock_Normal_s_jpg,

		},

		{

			mimeType: 'image/jpeg',

			name: 'Rock-cold_Albedo',

			uri: Rock_cold_Albedo_jpg,

		},

		{

			mimeType: 'image/png',

			name: 'Rock_Roughness',

			uri: Rock_Roughness_png,

		},

	],

	accessors: [

		{

			componentType: 5126,

			count: 3046,

			max: [0.48840004205703735, 0.544616162776947, 0.44548630714416504],

			min: [

				-0.5854957103729248, -0.38163846731185913, -0.43879997730255127,

			],

			type: 'VEC3',

		},

		{

			componentType: 5126,

			count: 3046,

			type: 'VEC3',

		},

		{

			componentType: 5126,

			count: 3046,

			type: 'VEC2',

		},

		{

			componentType: 5126,

			count: 3046,

			type: 'VEC2',

		},

		{

			componentType: 5123,

			count: 15360,

			type: 'SCALAR',

		},

	],

	bufferViews: [

		{

			buffer: 0,

			byteLength: 22249,

			byteOffset: 0,

		},

	],

	samplers: [

		{

			magFilter: 9729,

			minFilter: 9987,

		},

	],

	buffers: [

		{

			byteLength: 22252,

			uri: rock_item_bin,

		},

	],

};
