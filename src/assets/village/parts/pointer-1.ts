import pointer_1_bin from './pointer-1.bin?url';
import woods_color_jpg from './woods_color.jpg?url';

export default {
	"asset": {
		"generator": "Khronos glTF Blender I/O v3.6.27",
		"version": "2.0"
	},
	"extensionsUsed": [
		"KHR_draco_mesh_compression",
		"KHR_materials_specular",
		"KHR_materials_ior"
	],
	"extensionsRequired": [
		"KHR_draco_mesh_compression"
	],
	"scene": 0,
	"scenes": [
		{
			"name": "Scene",
			"nodes": [
				0
			]
		}
	],
	"nodes": [
		{
			"mesh": 0,
			"name": "pointer_1.001",
			"rotation": [
				0,
				-0.17055976390838623,
				0,
				0.985347330570221
			],
			"scale": [
				1.745681881904602,
				1.7456817626953125,
				1.745681881904602
			],
			"translation": [
				9.414183616638184,
				16.889787673950195,
				6.178427696228027
			]
		}
	],
	"materials": [
		{
			"doubleSided": true,
			"extensions": {
				"KHR_materials_specular": {
					"specularColorFactor": [
						0.215577971373942,
						0.215577971373942,
						0.215577971373942
					]
				},
				"KHR_materials_ior": {
					"ior": 1.4500000476837158
				}
			},
			"name": "wooden_color",
			"pbrMetallicRoughness": {
				"baseColorTexture": {
					"index": 0
				},
				"metallicFactor": 0
			}
		}
	],
	"meshes": [
		{
			"name": "Cube.101",
			"primitives": [
				{
					"attributes": {
						"POSITION": 0,
						"NORMAL": 1,
						"TEXCOORD_0": 2
					},
					"extensions": {
						"KHR_draco_mesh_compression": {
							"bufferView": 0,
							"attributes": {
								"POSITION": 0,
								"NORMAL": 1,
								"TEXCOORD_0": 2
							}
						}
					},
					"indices": 3,
					"material": 0,
					"mode": 4
				}
			]
		}
	],
	"textures": [
		{
			"sampler": 0,
			"source": 0
		}
	],
	"images": [
		{
			"mimeType": "image/jpeg",
			"name": "woods_color",
			"uri": woods_color_jpg
		}
	],
	"accessors": [
		{
			"componentType": 5126,
			"count": 123,
			"max": [
				0.3268214166164398,
				1.2356493473052979,
				1.0563616752624512
			],
			"min": [
				-0.22651176154613495,
				-2.101168632507324,
				-1.0582146644592285
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 123,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 123,
			"type": "VEC2"
		},
		{
			"componentType": 5123,
			"count": 426,
			"type": "SCALAR"
		}
	],
	"bufferViews": [
		{
			"buffer": 0,
			"byteLength": 1386,
			"byteOffset": 0
		}
	],
	"samplers": [
		{
			"magFilter": 9729,
			"minFilter": 9987
		}
	],
	"buffers": [
		{
			"byteLength": 1388,
			"uri": pointer_1_bin
		}
	]
}