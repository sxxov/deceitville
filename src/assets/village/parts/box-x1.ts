import box_x1_bin from './box-x1.bin?url';
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
			"name": "Box.016",
			"rotation": [
				0.4989776313304901,
				0.4941861033439636,
				0.5122507214546204,
				0.4943689703941345
			],
			"scale": [
				1.2370028495788574,
				1.2370026111602783,
				1.2370027303695679
			],
			"translation": [
				-23.390541076660156,
				5.941416263580322,
				4.208249092102051
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
			"name": "Cube.170",
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
			"count": 168,
			"max": [
				0.5663942694664001,
				0.5665421485900879,
				0.5667070150375366
			],
			"min": [
				-0.5671648383140564,
				-0.5670169591903687,
				-0.5668522119522095
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 168,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 168,
			"type": "VEC2"
		},
		{
			"componentType": 5123,
			"count": 324,
			"type": "SCALAR"
		}
	],
	"bufferViews": [
		{
			"buffer": 0,
			"byteLength": 1146,
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
			"byteLength": 1148,
			"uri": box_x1_bin
		}
	]
}